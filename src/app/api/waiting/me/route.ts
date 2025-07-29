import { verifyJwt } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies(); // Use await to unwrap the promise
  const token = cookieStore.get('authToken')?.value;
  const user = token ? verifyJwt(token) : null;

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { id: true, email: true, role: true },
  });

  return NextResponse.json(dbUser);
}