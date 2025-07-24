import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  if (!ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const product = await prisma.product.findUnique({ where: { id: params.id } });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
