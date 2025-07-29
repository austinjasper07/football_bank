import { prisma } from '@/lib/prisma';
import { signJwt, verifyPassword } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await verifyPassword(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

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
