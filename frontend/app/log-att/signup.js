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
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/api/auth/signup",
        form
      );
      alert("✅ " + res.data.message);
    } catch (err) {
      alert("❌ " + err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Signup</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="border p-2 w-full mb-2"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border p-2 w-full mb-2"
        value={form.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="border p-2 w-full mb-2"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="region"
        placeholder="Region"
        className="border p-2 w-full mb-2"
        value={form.region}
        onChange={handleChange}
      />

      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
      </select>

      <button
        onClick={handleSignup}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Signup
      </button>
    </div>
  );
}
