import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, role: string };
  if (decoded.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const request = await prisma.playerRequest.findUnique({
    where: { id: params.id },
    include: { user: true },
  });

  if (!request) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(request);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, role: string };
  if (decoded.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const body = await req.json(); // { status: "APPROVED" | "REJECTED" }

  if (!['APPROVED', 'REJECTED'].includes(body.status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  const updated = await prisma.playerRequest.update({
    where: { id: params.id },
    data: { status: body.status },
  });

  if (body.status === 'APPROVED') {
    await prisma.user.update({
      where: { id: updated.userId },
      data: { role: 'player' },
    });
  }

  return NextResponse.json(updated);
}
