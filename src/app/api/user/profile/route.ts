import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}
