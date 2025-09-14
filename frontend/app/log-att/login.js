"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("chemist");
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://medsecureai-impactverse-1.onrender.com/api/auth/login",
        { email, password, role }
      );

      // Store token
      localStorage.setItem("token", res.data.token);

      // Update context + storage
      login(res.data.user._id, res.data.user.role, res.data.user.name);

      // Redirect based on role
      if (res.data.user.role === "supplier") {
        // Redirect supplier to external dashboard
        window.location.href = "https://med-secure-ai-impactverse.vercel.app/";
      } else {
        // Other roles go to local dashboard
        router.push("/dashboard");
      }
    } catch (err) {
      alert("❌ " + (err.response?.data?.message || "Login error"));
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2"
        >
          <option value="chemist">Chemist</option>
          <option value="supplier">Supplier</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>

      {/* Signup Link */}
      <div className="mt-4 text-center">
        <span className="text-sm mr-2">Don t have an account?</span>
        <Link
          href="/signup"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}
