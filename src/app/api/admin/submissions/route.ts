import { verifyJwt } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get('authToken')?.value;
  const admin = verifyJwt(token || '');
  if (!admin || admin.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const submissions = await prisma.submission.findMany();
  return NextResponse.json(submissions);
}
