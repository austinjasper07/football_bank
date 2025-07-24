import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    const request = await prisma.playerRequest.findFirst({
      where: { userId: decoded.id },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!request) {
      return NextResponse.json({ message: 'No player request found' }, { status: 404 });
    }

    return NextResponse.json({ request });
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}
