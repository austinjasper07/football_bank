import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { email, password, firstName, lastName } = await req.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      role: 'user', // or 'player' if you want per type
      subscribed: false,
      password: hashed, // You'll need to add `password` to schema
    },
  });

  return NextResponse.json({ message: 'User created', user: { id: user.id, email: user.email } }, { status: 201 });
}
