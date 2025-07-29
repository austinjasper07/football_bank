import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { verifyJwt } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const player = await prisma.player.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(player);
}

export async function POST(req: Request) {
  const token = (await cookies()).get('authToken')?.value;
  const admin = verifyJwt(token || '');
  if (!admin || admin.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const body = await req.json();
  
  const existingPlayer = await prisma.player.findFirst({ where: { email: body.email } });
  if (existingPlayer) return NextResponse.json({ error: 'Player already exists' }, { status: 400 });
  
  const created = await prisma.player.create({ data: body });
  return NextResponse.json(created);
}
