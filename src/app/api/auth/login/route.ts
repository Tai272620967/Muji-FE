import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = [
  {
    id: 1,
    email: 'admin@example.com',
    password: '$2a$10$zFhF5s4cKQXUZq9H3BNbgeu/ACFai63RrQwNPU/FyORZj/ZF6.R52', // 'password'
  },
];

const SECRET_KEY = 'your_secret_key';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = users.find((u) => u.email === email);
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 401 });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  return NextResponse.json({ token });
}
