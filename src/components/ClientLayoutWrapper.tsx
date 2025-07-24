// components/ClientLayoutWrapper.tsx
"use client";
import { useAuth } from '@/hooks/useAuth';
import SplashScreen from './SplashScreen';
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const { loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <>
      {
        !isAdminPage && <Header />
      }
      
      <main className={`${isAdminPage ? 'max-w-full' : 'max-w-6xl px-4 lg:px-0'} mx-auto `}>
        {children}
      </main>
      {
        !isAdminPage && <Footer />
      }
      
    </>
  );
}
