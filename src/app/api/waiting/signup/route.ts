import { prisma } from '@/lib/prisma';
import { hashPassword, signJwt } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password, firstName, lastName  } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: 'User exists' }, { status: 400 });

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: {firstName, lastName, email, password: hashed, role: 'user', subscribed: false},
  });

  const token = signJwt({ id: user.id, role: user.role });

  const res = NextResponse.json({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, subscribed: user.subscribed });
  res.cookies.set('authToken', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    sameSite: 'strict',
  });

  return res;
}
