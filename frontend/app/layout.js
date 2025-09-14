"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";

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
    // Cursor cycling
    const cursorList = [
      'url("/medicine-strip-cursor-1.svg") 16 16, pointer',
      'url("/medicine-strip-cursor-2.svg") 16 16, pointer',
      'url("/medicine-strip-cursor-3.svg") 16 16, pointer',
      'url("/medicine-strip-cursor-4.svg") 16 16, pointer',
      'url("/medicine-strip-cursor-5.svg") 16 16, pointer',
      'url("/medicine-strip-cursor-6.svg") 16 16, pointer',
    ];
    let cursorIndex = 0;
    const setAllCursors = (cursor) => {
      document.body.style.cursor = cursor;
      const tags = ["button", "input", "textarea", "select", "a"];
      tags.forEach((tag) => {
        document.querySelectorAll(tag).forEach((el) => {
          el.style.cursor = cursor;
        });
      });
      document
        .querySelectorAll(".tab-btn, .radiant-box, .recommended-prompt")
        .forEach((el) => {
          el.style.cursor = cursor;
        });
    };
    setAllCursors(cursorList[cursorIndex]);
    const interval = setInterval(() => {
      cursorIndex = (cursorIndex + 1) % cursorList.length;
      setAllCursors(cursorList[cursorIndex]);
    }, 5000);
    // Force dark theme
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    return () => clearInterval(interval);
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
