"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("chemist");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(
      "https://medsecureai-impactverse-1.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone, region, role }),
      }
    );

    const data = await res.json();
    if (data.success) {
      alert("Signup successful! Please login.");
      router.push("/log-att/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-night">
      <div className="w-full max-w-md radiant-animated-border mt-24 bg-black rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-brand mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="radiant-input px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="radiant-input px-4 py-2"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="radiant-input px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="radiant-input px-4 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="radiant-input px-4 py-2"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="radiant-input px-4 py-2"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="radiant-input px-4 py-2"
          >
            <option value="chemist">Chemist</option>
            <option value="supplier">Supplier</option>
          </select>
          <button
            type="submit"
            className="bg-brand text-white font-bold py-2 rounded-lg hover:bg-green-600 transition glow-btn"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-400">
            Already have an account?{" "}
            <a href="/log-att/login" className="text-brand underline">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
