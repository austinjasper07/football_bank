import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  if (!ObjectId.isValid(params.id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  const player = await prisma.player.findUnique({ where: { id: params.id } });
  if (!player) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(player);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const player = await prisma.player.update({
    where: { id: params.id },
    data
  });

  return NextResponse.json(player);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const deleted = await prisma.player.delete({ where: { id: params.id } });
  return NextResponse.json(deleted);
}
