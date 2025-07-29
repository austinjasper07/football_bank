import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { verifyJwt } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const token = (await cookies()).get('authToken')?.value;
  const admin = verifyJwt(token || '');
  if (!admin || admin.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { status, rejectionReason } = await req.json();

  const submission = await prisma.submission.findUnique({
    where: { id: params.id },
  });

  if (!submission) {
    return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
  }

  // 🟩 Handle Approval
  if (status === 'APPROVED') {
    // Check for existing player by email + lastName
    const duplicate = await prisma.player.findFirst({
      where: {
        email: submission.email,
        lastName: submission.name.split(' ').slice(-1)[0], // Assuming lastName is the last word in name
      },
    });

    if (duplicate) {
      return NextResponse.json(
        { error: 'Player with this email and last name already exists' },
        { status: 409 }
      );
    }

    // Create player entry
    await prisma.player.create({
      data: {
        firstName: submission.name.split(' ')[0],
        lastName: submission.name.split(' ').slice(-1)[0],
        dob: '', // You may need to adjust this
        country: submission.country,
        countryCode: '',
        position: submission.position,
        height: '',
        weight: '',
        foot: '',
        email: submission.email,
        phone: submission.phone,
        imageUrl: [],
        cvUrl: '',
        description: submission.bio,
        videoPrimary: '',
        videoAdditional: [],
        featured: false,
        playerOfTheWeek: false,
      },
    });
  }

  // 🔴 Handle rejection or update
  const updated = await prisma.submission.update({
    where: { id: params.id },
    data: {
      status,
      rejectionReason: status === 'REJECTED' ? rejectionReason : null,
    },
  });

  return NextResponse.json(updated);
}
