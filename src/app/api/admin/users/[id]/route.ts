import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  if (!ObjectId.isValid(params.id))
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(user);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const updates = await req.json();
  const user = await prisma.user.update({ where: { id: params.id }, data: updates });
  return NextResponse.json(user);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const deleted = await prisma.user.delete({ where: { id: params.id } });
  return NextResponse.json(deleted);
}


