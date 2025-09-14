"use client";

import { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    region: "",
    role: "chemist",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://medsecureai-impactverse-1.onrender.com/api/auth/signup",
        form
      );
      alert("✅ " + res.data.message);
    } catch (err) {
      alert("❌ " + (err.response?.data?.message || "Error"));
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="border p-2"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          className="border p-2"
          value={form.region}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="chemist">Chemist</option>
          <option value="supplier">Supplier</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
