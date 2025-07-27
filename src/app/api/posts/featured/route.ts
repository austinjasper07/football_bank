import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const post = (await prisma.post.findMany({ where: { featured: true}, orderBy: { createdAt: 'desc' } }));
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(post);
}