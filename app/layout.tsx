import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mauricio Quirós | Developer Portfolio",
  description:
    "Desarrollador que encuentra en el código la forma de materializar ideas. Profesional en Informática Empresarial creando soluciones que realmente impactan.",
  keywords: [
    "Mauricio Quirós",
    "Developer",
    "Full-Stack",
    ".NET",
    "Java",
    "Costa Rica",
  ],
  authors: [{ name: "Mauricio A. Quirós Suárez" }],
  icons: {
    icon: "/pendragon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
