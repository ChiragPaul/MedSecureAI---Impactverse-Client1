"use client";

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SupplierDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Supplier Dashboard</h1>
      <p className="mb-4">Welcome, {user?.name || "Supplier"} 👋</p>

      {/* Supplier profile section */}
      <div className="border p-4 rounded shadow mb-4">
        <h2 className="text-lg font-semibold">Your Profile</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      {/* IPFS Verification Link (redirect to the existing external link) */}
      <div className="mb-4">
        <a
          href="https://adi-tya16.github.io/medblock-blockchain-ipfs/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to IPFS Verification
        </a>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
