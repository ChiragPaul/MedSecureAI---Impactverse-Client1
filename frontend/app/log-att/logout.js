"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const r = useRouter();
  useEffect(() => {
    // Clear user session and localStorage keys
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");

    // Redirect to home page after 1.2s
    setTimeout(() => r.replace("/"), 1200);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow text-center w-full max-w-md">
        <h2 className="text-xl font-bold">You have been logged out</h2>
        <p className="text-gray-500 mt-2">Redirecting to home...</p>
      </div>
    </div>
  );
}
