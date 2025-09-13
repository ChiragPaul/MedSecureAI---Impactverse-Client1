'use client';

import React, { useRef, useEffect, useState } from "react";

const generateData = (numPoints = 20) => {
  return Array.from({ length: numPoints }, (_, i) => ({
    x: i,
    y: Math.floor(Math.random() * 100) + 10,
  }));
};

export default function AnimatedGraph() {
  const [data, setData] = useState(generateData());
  const [hovered, setHovered] = useState(null);

  const width = 320;
  const height = 160;
  const padding = 32;
  const maxY = Math.max(...data.map((d) => d.y));

  // Map data to SVG coordinates
  const getX = (d) => padding + (d.x * (width - 2 * padding)) / (data.length - 1);
  const getY = (d) => height - padding - ((d.y - 0) * (height - 2 * padding)) / (maxY - 0);

  // Animate data on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg width={width} height={height} style={{ background: "#001a66", borderRadius: "1rem" }}>
      {/* X and Y axes */}
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#ededed" strokeWidth={2} />
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#ededed" strokeWidth={2} />

      {/* Data line */}
      <polyline
        fill="none"
        stroke="#00ff88"
        strokeWidth={3}
        points={data.map((d) => `${getX(d)},${getY(d)}`).join(" ")}
        style={{ transition: "all 0.8s cubic-bezier(.4,2,.3,1)" }}
      />

      {/* Data points */}
      {data.map((d, i) => (
        <circle
          key={i}
          cx={getX(d)}
          cy={getY(d)}
          r={hovered === i ? 7 : 4}
          fill={hovered === i ? "#00ff88" : "#ededed"}
          style={{ cursor: "pointer", transition: "r 0.2s" }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}

      {/* Tooltip */}
      {hovered !== null && (
        <g>
          <rect
            x={getX(data[hovered]) - 30}
            y={getY(data[hovered]) - 38}
            width={60}
            height={24}
            rx={6}
            fill="#222"
            stroke="#00ff88"
            strokeWidth={1}
          />
          <text
            x={getX(data[hovered])}
            y={getY(data[hovered]) - 22}
            textAnchor="middle"
            fill="#00ff88"
            fontSize={14}
            fontFamily="monospace"
          >
            x: {data[hovered].x}, y: {data[hovered].y}
          </text>
        </g>
      )}
    </svg>
  );
}
