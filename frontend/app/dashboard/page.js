"use client";

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">MedSecure AI Dashboard</h1>
      <p className="mb-4">Hello, {user?.name || "User"} 👋</p>

      {/* Admin/Chemist features */}
      <div className="border p-4 rounded shadow mb-4">
        <h2 className="text-lg font-semibold">System Overview</h2>
        <ul className="list-disc list-inside">
          <li>Medicine supply chain tracking</li>
          <li>Fraud detection AI</li>
          <li>Blockchain audit logs</li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
