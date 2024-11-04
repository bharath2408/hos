import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
// import * as bcrypt from 'bcryptjs';

const USERS_FILE_PATH = path.join(process.cwd(), 'src/data/users.json');

interface User {
  id: number;  // Note: Using number here since we're generating numeric IDs
  email: string;
  fullName: string;
  position: string;
  password: string;
  createdAt: string;
}

export async function POST(req: Request) {
  try {
    const { fullName, email, password, createdAt, position } = await req.json();

    // Read existing users
    const users = JSON.parse(fs.readFileSync(USERS_FILE_PATH, 'utf8'));

    // Check if user already exists
    if (users.some((user: User) => user.email === email)) {
      return NextResponse.json({ success: false, error: 'Email already exists' }, { status: 400 });
    }

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Calculate next unique ID
    const nextId = users.length > 0 ? Math.max(...users.map((user: User) => user.id)) + 1 : 1;

    // Add new user
    const newUser = {
      id: nextId,
      fullName,
      email,
      position,
      password: password,
      createdAt
    };

    users.push(newUser);

    // Write back to file
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 });
  }
} 