"use client";

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

function getRandomUserId() {
  return Math.random().toString(36).substring(2, 10);
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black text-green-600 flex flex-col">
      <Navbar />

      <main className="flex-grow p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-400">
          Welcome to MedSecure AI Dashboard
        </h1>
        <p className="mb-6 text-green-300">
          Hello {user?.name || "User"}! You are logged in as a{" "}
          {user?.role || "user"}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            className="bg-gradient-to-r from-green-900 to-green-700 rounded-lg p-6 shadow-lg cursor-pointer hover:brightness-110 transition"
            onClick={() => router.push("/meddata")}
          >
            <h2 className="text-xl font-semibold mb-2 text-green-200">
              Access Medicine Data
            </h2>
            <p className="text-green-400">
              View and manage medicine data in the system.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-green-900 to-green-700 rounded-lg p-6 shadow-lg cursor-pointer hover:brightness-110 transition"
            onClick={() => router.push("/meddata")}
          >
            <h2 className="text-xl font-semibold mb-2 text-green-200">
              Medicine Search
            </h2>
            <p className="text-green-400">
              Search and check availability of medicines in your region.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-green-900 to-green-700 rounded-lg p-6 shadow-lg cursor-pointer hover:brightness-110 transition"
            onClick={() => router.push("/ai-chat")}
          >
            <h2 className="text-xl font-semibold mb-2 text-green-200">
              AI Chat Assistant
            </h2>
            <p className="text-green-400">
              Get AI-powered assistance for medicine availability and orders.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-green-900 to-green-700 rounded-lg p-6 shadow-lg cursor-pointer hover:brightness-110 transition"
            onClick={() => router.push("/stockists")}
          >
            <h2 className="text-xl font-semibold mb-2 text-green-200">
              Stockist Directory
            </h2>
            <p className="text-green-400">
              Find medicine stockists and suppliers in your area.
            </p>
          </div>
        </div>

        <div className="bg-green-900 rounded-lg p-6 shadow-lg text-green-300">
          <h3 className="text-lg font-semibold mb-4">Account Information</h3>
          <p>
            <strong>User ID:</strong> {getRandomUserId()}
          </p>
          <p>
            <strong>Role:</strong> {user?.role || "N/A"}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </main>
    </div>
  );
}
