import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const product = await prisma.product.findMany({ where: { featured: true} });
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(product);
}