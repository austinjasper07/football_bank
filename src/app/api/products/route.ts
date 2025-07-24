import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(products);
}


export async function POST(req: NextRequest) {
  const data = await req.json();
  const product = await prisma.product.create({ data });
  return NextResponse.json(product, { status: 201 });
}

