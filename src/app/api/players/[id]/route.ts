import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const player = await prisma.player.findUnique({ where: { id: params.id } });
  if (!player) return NextResponse.json({ error: 'Player not found' }, { status: 404 });
  return NextResponse.json(player);
}
