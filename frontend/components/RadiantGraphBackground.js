"use client";
// add this kind of table in the container of feature two just like this 
import React, { useRef, useEffect, useState } from "react";

function generateGraphData(numPoints = 8) {
  // Generate smooth random data
  let data = [];
  let lastY = 50;
  for (let i = 0; i < numPoints; i++) {
    lastY += Math.random() * 20 - 10;
    data.push({ x: i, y: Math.max(10, Math.min(90, lastY)) });
  }
  return data;
}

export default function RadiantGraphBackground() {
  const [data, setData] = useState(generateGraphData());
  const width = 400;
  const height = 220;
  const padding = 32;
  const maxY = 100;
  const minY = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateGraphData());
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Map data to SVG coordinates
  const getX = (d) => padding + (d.x * (width - 2 * padding)) / (data.length - 1);
  const getY = (d) => height - padding - ((d.y - minY) * (height - 2 * padding)) / (maxY - minY);

  return (
    <svg width={width} height={height} style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}>
      {/* Background gradient */}
      <defs>
        <linearGradient id="bg-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#001a66" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#001a66" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="url(#bg-gradient)" />
      <rect x="0" y="0" width={width} height={height} fill="url(#glow)" />
      {/* Equi-spaced vertical grid lines */}
      {data.map((d, i) => (
        <line
          key={i}
          x1={getX(d)}
          y1={padding}
          x2={getX(d)}
          y2={height - padding}
          stroke="#00ff88"
          strokeWidth={1.5}
          opacity={0.25}
        />
      ))}
      {/* Smooth animated graph line */}
      <polyline
        fill="none"
        stroke="#00ff88"
        strokeWidth={3}
        points={data.map((d) => `${getX(d)},${getY(d)}`).join(" ")}
        style={{ transition: "all 1.2s cubic-bezier(.4,2,.3,1)" }}
      />
      {/* Mark coordinates */}
      {data.map((d, i) => (
        <circle
          key={i}
          cx={getX(d)}
          cy={getY(d)}
          r={5}
          fill="#00ff88"
          opacity={0.7}
        />
      ))}
    </svg>
  );
}
