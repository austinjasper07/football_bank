import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  if (!ObjectId.isValid(params.id))
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(post);
}
