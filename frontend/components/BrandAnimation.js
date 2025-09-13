"use client";
import { useEffect, useState } from "react";

export default function BrandAnimation({ onClose }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (!show) {
      if (onClose) onClose();
    }
  }, [show, onClose]);
  return show ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.95)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.7s"
      }}
      onClick={() => setShow(false)}
    >
      <h1
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          color: "#22c55e",
          fontWeight: "bold",
          fontSize: "7vw",
          textShadow: "0 0 64px #22c55e, 0 0 32px #001a66",
          animation: "zoomInBrand 1.2s cubic-bezier(.4,2,.3,1)"
        }}
      >
        MedSecure AI
      </h1>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomInBrand {
          0% { transform: scale(0.1) translateY(100vh); opacity: 0; }
          60% { transform: scale(1.2) translateY(0); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  ) : null;
}
