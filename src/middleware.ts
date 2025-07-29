import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const publicRoutes = [
    '/api/player',
    '/api/product',
    '/api/post',
  ];

  const protectedRoutes = [
    '/api/player/profile-submission',
  ];

  const adminRoutePrefixes = [
    '/api/admin',
  ];

  const isPublic = publicRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  );

  if (isPublic) return NextResponse.next();

  // Grab session with Kinde
  const { getUser, getRoles } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }

  // Protected route access (any logged-in user)
  const isProtected = protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  );

  if (isProtected) return NextResponse.next();

  // Admin route check: validate permissions or roles
  const isAdminRoute = adminRoutePrefixes.some(prefix =>
    pathname === prefix || pathname.startsWith(prefix + '/')
  );

  if (isAdminRoute) {
    const canAccess = await getRoles();
    if (!canAccess) {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }
  }

  // Default: allowed
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/api/admin/:path*',
    '/api/player/profile-submission', // or any protected route
  ],
};
