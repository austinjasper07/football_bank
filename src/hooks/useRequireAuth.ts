import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export function useRequireAuth(redirectTo = '/auth/signin', requiredRole?: 'admin' | 'user' | 'player') {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace(redirectTo);
      } else if (requiredRole && user.role !== requiredRole) {
        router.replace('/unauthorized');
      }
    }
  }, [user, loading, router, requiredRole]);

  return { user, loading };
}
