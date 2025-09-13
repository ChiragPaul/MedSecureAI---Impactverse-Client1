
"use client";
import React, { useEffect, useState } from "react";

const cardContents = [
  {
    title: "About Us",
    text: "We are a passionate team dedicated to building innovative solutions for our users. Our mission is to deliver quality, reliability, and a great experience.",
  },
  {
    title: "Our Vision",
    text: "Empowering users through technology and creativity, we strive to make a positive impact in every project we deliver.",
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, and customer focus drive our work. We believe in building trust and long-term relationships.",
  },
  {
    title: "Contact Us",
    text: "Reach out to us for collaboration, support, or feedback. We are always eager to connect and grow together.",
  },
];

export default function AboutUsFlashCard({ side = "left", cardIndex = 0, position = "default" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;
      if (position === "center-equispaced" && cardIndex === 2) {
        // Show center card when scrolled past half the page
        setVisible(scrollY > winH / 2);
      } else {
        // Show side cards as before
        if (
          (cardIndex < 2 && scrollY > winH / 2 && scrollY < winH * 1.5) ||
          (cardIndex >= 2 && scrollY > winH * 1.5)
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [cardIndex, position]);


  const content = cardContents[cardIndex];

  // Custom style for position
  let customStyle = { pointerEvents: visible ? "auto" : "none", background: "none" };
  if (position === "right-off-center") {
    customStyle = {
      ...customStyle,
      left: "calc(66% + 3cm)",
      top: "50%",
      transform: visible ? "translateX(0) scale(1.05)" : "translateX(120%) scale(1)",
    };
  } else if (position === "left-off-center") {
    customStyle = {
      ...customStyle,
  left: "calc(25% - 8cm)",
      top: "50%",
      transform: visible ? "translateX(0) scale(1.05)" : "translateX(-120%) scale(1)",
    };
  } else if (position === "center-equispaced") {
    customStyle = {
      ...customStyle,
      left: "50%",
      top: "50%",
      transform: visible ? "translate(-50%, 0) scale(1.05)" : "translate(-50%, -120%) scale(1)",
  transition: "transform 0.3s cubic-bezier(.4,2,.3,1), opacity 0.3s, box-shadow 0.2s"
    };
  }

  return (
    <div
      className={`about-flash-card-scroll ${side} ${visible ? "visible" : ""}`}
      style={customStyle}
    >
      <h3 className="text-xl font-bold mb-2">{content.title}</h3>
      <p className="text-gray-200 text-base">{content.text}</p>
    </div>
  );
}
