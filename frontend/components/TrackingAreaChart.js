"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function TrackingAreaChart({ data, fullSize }) {
  // Convert to array suitable for recharts (status on x)
  const arr = data.map(d => ({ name: d.status, count: d.count }));
  return (
    <div
      style={{
        width: "100%",
        height: fullSize ? "100%" : 260,
        background: "#000",
        borderRadius: "1.5rem",
        padding: fullSize ? "0" : "1rem",
        boxShadow: "0 0 24px 0 #22c55e33",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={arr} style={{ background: "#000", borderRadius: "1.5rem", overflow: "hidden" }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip wrapperStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "0.75rem" }} />
          <Area type="monotone" dataKey="count" fill="#22c55e" stroke="#16a34a" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
