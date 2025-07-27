import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const player = await prisma.player.findMany({ where: { featured: true} });
  if (!player) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(player);
}