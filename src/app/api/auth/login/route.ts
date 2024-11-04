import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
// import * as bcrypt from 'bcryptjs';

interface User {
  id: string;
  email: string;
  fullName: string;
  position: string;
  password: string;
}

const USERS_FILE_PATH = path.join(process.cwd(), 'src/data/users.json');

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Read users file and handle missing file
    let data;
    try {
      data = JSON.parse(fs.readFileSync(USERS_FILE_PATH, 'utf8'));
      console.log("Users data loaded:", data);
    } catch (error) {
      console.log("Error reading users file:", error);
      data = { users: [] };
    }

    // Find user - fixed array method and user search
    const user = data.find((u: User) => u.email === email);
    console.log("User details:", user ? {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      position: user.position
    } : 'No user found');

    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 400 });
    }

    // Verify password - fixed password check
    const isValidPassword = user.password === password;
    console.log("Password validation:", isValidPassword);

    if (!isValidPassword) {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true,
      user: {
        id: user.id,
        fullName: user.fullName,
        position: user.position,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 });
  }
} 