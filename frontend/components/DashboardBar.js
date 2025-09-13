"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

export default function DashboardBar({ data }) {
  return (
    <div style={{ width: "100%", height: 300, background: "#000", borderRadius: "1.5rem", padding: "1rem", boxShadow: "0 0 24px 0 #22c55e33" }}>
      <ResponsiveContainer>
        <BarChart data={data} style={{ background: "#000", borderRadius: "1.5rem", overflow: "hidden" }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip wrapperStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "0.75rem" }} />
          <Bar dataKey="entries" fill="#22c55e" radius={[12, 12, 12, 12]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
