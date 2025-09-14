"use client";
import NavbarLoggedOut from "./NavbarLoggedOut";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return <NavbarLoggedOut />;
  }

  // Get user info from localStorage
  const userName = localStorage.getItem("userName");
  const userId = localStorage.getItem("userId");

  return (
    <nav className="bg-night border-b border-brand/20 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1
        className="text-2xl font-bold text-brand"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          cursor: "pointer",
        }}
      >
        MedSecure AI
      </h1>
      {/* Links in black box with semi-circular sides */}
      <div className="flex items-center space-x-6">
        <div
          className="bg-black rounded-full px-8 py-2 flex space-x-8 shadow-md"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          <a
            href="/ai-chat"
            className="font-bold text-lg flex items-center gap-2 transition navbar-feature-link text-gray-100 hover:text-brand pb-1"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            {/* SVG icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="12" height="12" rx="3" fill="#001a66" />
            </svg>
            MedAI
          </a>
          <a
            href="/meddata"
            className="font-bold text-lg flex items-center gap-2 transition navbar-feature-link text-gray-100 hover:text-brand pb-1"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            {/* SVG icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="10,3 17,17 3,17" fill="#ededed" />
            </svg>
            MedData
          </a>
        </div>
        {/* User Info */}
        <div className="text-gray-300 text-sm font-mono">
          {userName ? `Hello, ${userName}` : `User ID: ${userId}`}
        </div>
      </div>
      {/* User Info and Logout */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-300 text-sm">
          {localStorage.getItem("userName") ||
            localStorage.getItem("userId") ||
            "User"}
        </span>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl shadow-glow transition text-white"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
