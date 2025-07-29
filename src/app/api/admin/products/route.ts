import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { verifyJwt } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const token = (await cookies()).get('authToken')?.value;
  const admin = verifyJwt(token || '');
  if (!admin || admin.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const body = await req.json();
  const created = await prisma.product.create({ data: body });
  return NextResponse.json(created);
}
