"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("role");

    if (!userId) {
      router.replace("/log-att/login");
      return;
    }

    // Set user data
    setUser({
      id: userId,
      role: userRole,
      name: localStorage.getItem("userName") || "User",
    });
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    router.replace("/log-att/logout");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-night text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Header */}
          <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-6 mb-8">
            <h1 className="text-3xl font-bold text-brand mb-2">
              Welcome to MedSecure AI Dashboard
            </h1>
            <p className="text-gray-300 mb-4">
              Hello {user?.name}! You are logged in as a {user?.role}.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => router.push("/meddata")}
                className="px-6 py-3 bg-brand hover:bg-brand-dark rounded-xl font-bold transition"
              >
                Access Medicine Data
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 border border-brand/50 hover:bg-brand/10 rounded-xl font-bold transition"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-6 hover:border-brand/40 transition">
              <h3 className="text-xl font-bold text-brand mb-3">
                Medicine Search
              </h3>
              <p className="text-gray-300 mb-4">
                Search and check availability of medicines in your region.
              </p>
              <button
                onClick={() => router.push("/meddata")}
                className="w-full px-4 py-2 bg-brand/20 hover:bg-brand/30 rounded-lg font-medium transition"
              >
                Search Medicines
              </button>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-6 hover:border-brand/40 transition">
              <h3 className="text-xl font-bold text-brand mb-3">
                AI Chat Assistant
              </h3>
              <p className="text-gray-300 mb-4">
                Get AI-powered assistance for medicine availability and orders.
              </p>
              <button
                onClick={() => router.push("/ai-chat")}
                className="w-full px-4 py-2 bg-brand/20 hover:bg-brand/30 rounded-lg font-medium transition"
              >
                Start Chat
              </button>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-6 hover:border-brand/40 transition">
              <h3 className="text-xl font-bold text-brand mb-3">
                Stockist Directory
              </h3>
              <p className="text-gray-300 mb-4">
                Find medicine stockists and suppliers in your area.
              </p>
              <button
                onClick={() => router.push("/stockists")}
                className="w-full px-4 py-2 bg-brand/20 hover:bg-brand/30 rounded-lg font-medium transition"
              >
                View Stockists
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-brand mb-4">
              Account Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">User ID</p>
                <p className="text-white font-mono">{user?.id}</p>
              </div>
              <div>
                <p className="text-gray-400">Role</p>
                <p className="text-white capitalize">{user?.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
