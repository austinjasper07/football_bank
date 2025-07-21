// components/ClientLayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {
        !isAdminPage && <Header />
      }
      
      <main className={`${isAdminPage ? 'max-w-full px-12' : 'max-w-6xl px-4 lg:px-0'} mx-auto `}>
        {children}
      </main>
      {
        !isAdminPage && <Footer />
      }
      
    </>
  );
}
