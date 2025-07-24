import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '@/lib/types';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const isValid = await bcrypt.compare(password, (user as User).password);
  if (!isValid) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  return NextResponse.json({ token, user: { id: user.id, email: user.email, role: user.role } });
}
