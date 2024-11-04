import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    if (!data.firstName) {
      throw new Error('First name is required');
    }
    if (!data.email) {
      throw new Error('Email is required');
    }

    const applicationDir = path.join(process.cwd(), 'src', 'app', 'application', 'application_data');
    const applicationsFile = path.join(applicationDir, 'applications.json');

    // Create directory if it doesn't exist
    try {
      await fs.access(applicationDir);
    } catch {
      await fs.mkdir(applicationDir, { recursive: true });
    }

    // Read existing applications or initialize empty array
    let applications = [];
    try {
      const fileContent = await fs.readFile(applicationsFile, 'utf-8');
      applications = JSON.parse(fileContent);
      
      // Check if email already exists
      const existingApplication = applications.find((app: { email: string }) => 
        app.email.toLowerCase() === data.email.toLowerCase()
      );
      
      if (existingApplication) {
        return NextResponse.json(
          { 
            success: false,
            error: `Application already exists for email: ${data.email}. Please use a different email address.`
          },
          { status: 400 }
        );
      }
      
    } catch {
      console.log('No existing applications file, starting fresh');
    }

    // Add timestamp to the application data
    const applicationWithTimestamp = {
      ...data,
      timestamp: Date.now(),
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    // Add new application to the array
    applications.push(applicationWithTimestamp);

    // Write updated applications array back to file
    await fs.writeFile(applicationsFile, JSON.stringify(applications, null, 2));
    console.log('Applications file updated successfully');

    return NextResponse.json({ 
      success: true, 
      applicationId: applicationWithTimestamp.id 
    });
  } catch (err: unknown) {
    console.error('Error saving application:', err);
    return NextResponse.json(
      { 
        success: false,
        error: err instanceof Error ? err.message : 'Failed to save application'
      },
      { status: 500 }
    );
  }
}