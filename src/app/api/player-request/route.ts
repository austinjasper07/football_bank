import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, role: string };
  if (decoded.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const requests = await prisma.playerRequest.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true },
  });

  return NextResponse.json(requests);
}

export async function POST(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

  const subscription = await prisma.subscription.findFirst({
    where: {
      userId: decoded.id,
      type: 'player_publication',
      isActive: true,
    },
  });

  if (!subscription) {
    return NextResponse.json({ error: 'Active player_publication subscription required' }, { status: 403 });
  }

  const existing = await prisma.playerRequest.findFirst({
    where: { userId: decoded.id, status: 'PENDING' },
  });

  if (existing) {
    return NextResponse.json({ error: 'You already have a pending request' }, { status: 400 });
  }

  const body = await req.json();

  const newRequest = await prisma.playerRequest.create({
    data: {
      userId: decoded.id,
      formData: body,
    },
  });

  return NextResponse.json(newRequest, { status: 201 });
}
