// app/layout.tsx
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FootballBank.soccer",
  description: "Empowering football talent worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.FontAwesomeConfig = { autoReplaceSvg: 'nest' };`,
          }}
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans bg-primary-bg text-primary-text">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
