// src/hooks/useRequireAuth.ts
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './useAuth';

export function useRequireAuth(redirectTo = '/auth/signin') {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(redirectTo);
    }
  }, [user, loading, router]);

  return { user, loading };
}
