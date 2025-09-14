"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
