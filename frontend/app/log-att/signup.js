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
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, phone, region, role }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Signup successful! Please login.");
      router.push("/log-att/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-night"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "var(--background)",
        color: "var(--foreground)",
        transition: "background 0.5s, color 0.5s",
        minHeight: "140vh",
      }}
    >
      <div
        className="w-full max-w-md radiant-animated-border mt-24"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          background: "#000",
          borderRadius: "1.25rem",
          boxShadow: "0 8px 32px #001a6699",
        }}
      >
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
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="radiant-input px-4 py-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="radiant-input px-4 py-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            required
          />
          <input
            type="text"
            placeholder="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="radiant-input px-4 py-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="radiant-input px-4 py-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="radiant-input px-4 py-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="radiant-input px-4 py-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <option value="chemist">Chemist</option>
            <option value="supplier">Supplier</option>
          </select>
          <button
            type="submit"
            className="bg-brand text-white font-bold py-2 rounded-lg hover:bg-green-600 transition glow-btn"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-400">
            Already have an account?{" "}
            <a
              href="/log-att/login"
              className="text-brand underline"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Login
            </a>
          </span>
        </div>
      </div>
      {/* About Us statement with description and radiant hover effect */}
      <div className="w-full flex flex-col items-center justify-center mt-32 mb-8">
        <div
          className="about-us-statement radiant-hover px-8 py-6 rounded-2xl text-center"
          style={{
            maxWidth: "600px",
            fontFamily: "Arial, Helvetica, sans-serif",
            background: "none",
            color: "var(--foreground)",
            boxShadow: "none",
            cursor: "pointer",
            border: "2px solid transparent",
            transition: "box-shadow 0.3s, border 0.3s, color 0.3s",
          }}
        >
          <h3
            className="text-2xl font-bold mb-2 underline text-brand"
            style={{
              transition: "color 0.3s",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            About Us
          </h3>
          <p
            className="text-lg text-gray-200"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            MedSecure AI is dedicated to building innovative, secure, and
            user-friendly healthcare solutions. Our mission is to empower users
            with technology, ensuring privacy, reliability, and a seamless
            experience. Hover to see our radiant vision!
          </p>
        </div>
      </div>
      <footer
        className="mt-12 text-center text-gray-400"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </footer>
    </div>
  );
}
