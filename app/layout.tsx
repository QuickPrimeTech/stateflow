import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StateFlow | Professional Tech Solutions in Nairobi",
  description:
    "Expert website development, mobile apps, and IT maintenance services to transform your business operations.",
  keywords: [
    "Web Development Kenya",
    "Next.js Developer Nairobi",
    "App Development",
    "IT Support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Navigation stays at the top of every page */}
        <Navbar />

        {/* The "flex-grow" ensures the footer stays at the bottom on short pages */}
        <main className="grow">{children}</main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
