import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const players = await prisma.player.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(players);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const player = await prisma.player.create({ data });
  return NextResponse.json(player, { status: 201 });
}
