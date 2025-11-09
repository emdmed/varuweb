import type { Metadata } from "next";
import { Electrolize, Major_Mono_Display } from "next/font/google";
import "./globals.css";

const electrolize = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: "400",
});

const majormono = Major_Mono_Display({
  variable: "--font-majormono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Varu CLI - Terminal-Based Node.js Project Management",
  description: "An interactive command-line dashboard for managing and monitoring your Node.js projects. Built with React and Ink featuring vim-style navigation, real-time process monitoring, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${electrolize.variable} ${majormono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
