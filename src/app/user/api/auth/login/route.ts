import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
// import * as bcrypt from 'bcryptjs';

// Add this interface at the top of the file
interface User {
  id: string;
  email: string;
  password: string;
  fullName: string;
}

const USERS_FILE_PATH = path.join(process.cwd(), 'src/data/users.json');

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Read users file and handle missing file
    let data;
    try {
      data = JSON.parse(fs.readFileSync(USERS_FILE_PATH, 'utf8'));
      console.log("Error reading users file:", data);
    } catch {
      // Initialize empty users array if file doesn't exist
      data = { users: [] };
    }

    // Ensure users array exists
    // const users = data.users || [];
    // console.log("Users:",  data.users);
    // Find user
    const user = data.find((u: User) => u.email === email);
    console.log("User found:", user);


    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 400 });
    }

    // Verify password
    const isValidPassword =  await data.some((u: User) => u.password === password);

    if (!isValidPassword) {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 });
  }
} 