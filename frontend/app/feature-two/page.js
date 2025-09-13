"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import DashboardBar from "../../components/DashboardBar";

// Ensure font and color for entire page
export default function FeatureTwo() {
  const [activeTab, setActiveTab] = useState(0);
  const tabData = [
    [
      { month: "Jan", entries: 40 },
      { month: "Feb", entries: 55 },
      { month: "Mar", entries: 30 },
      { month: "Apr", entries: 70 },
      { month: "May", entries: 60 },
      { month: "Jun", entries: 80 }
    ],
    [
      { month: "Jan", entries: 20 },
      { month: "Feb", entries: 35 },
      { month: "Mar", entries: 50 },
      { month: "Apr", entries: 40 },
      { month: "May", entries: 65 },
      { month: "Jun", entries: 90 }
    ],
    [
      { month: "Jan", entries: 10 },
      { month: "Feb", entries: 25 },
      { month: "Mar", entries: 60 },
      { month: "Apr", entries: 30 },
      { month: "May", entries: 80 },
      { month: "Jun", entries: 70 }
    ]
  ];
  const tabNames = ["Medicine Prediction", "Consumption Prediction", "Co Relation"];
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#ededed', background: 'var(--background)', minHeight: '100vh' }} className="min-h-screen bg-night text-white flex flex-col">
      <Navbar />
      {/* Tabs */}
      <div className="flex justify-center bg-night border-b border-brand/20 py-3 space-x-6">
        {tabNames.map((name, idx) => (
          <button
            key={name}
            className={`tab-btn${activeTab === idx ? " text-brand border-b-2 border-brand pb-1" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {name}
          </button>
        ))}
      </div>
      {/* Content */}
      <main className="flex-grow px-6 py-10">
        <div className="bg-night border border-brand/30 p-6 rounded-2xl shadow-md h-96 flex flex-row items-center justify-center gap-8 relative overflow-hidden mb-8">
          {/* All elements as buttons */}
          <button className="glow-btn" style={{ border: '2px solid #ededed', borderRadius: '1.5rem', padding: '1.5rem', minWidth: '220px', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', background: 'transparent', color: '#ededed', marginRight: '1rem', cursor: 'pointer' }}>
            List of available stocklist
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="glow-btn" style={{ border: '2px solid #ededed', borderRadius: '0.8rem', padding: '0.7rem 2.5rem', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '1rem', background: 'transparent', color: '#ededed', marginBottom: '0.5rem', cursor: 'pointer' }}>Stocks</button>
            <button className="glow-btn" style={{ border: '2px solid #ededed', borderRadius: '0.8rem', padding: '0.7rem 2.5rem', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '1rem', background: 'transparent', color: '#ededed', marginBottom: '0.5rem', cursor: 'pointer' }}>Medicine name</button>
            <button className="glow-btn" style={{ border: '2px solid #ededed', borderRadius: '0.8rem', padding: '0.7rem 2.5rem', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '1rem', background: 'transparent', color: '#ededed', cursor: 'pointer' }}>Place order</button>
          </div>
          <button className="glow-btn" style={{ marginLeft: '2rem', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '1.1rem', color: '#ededed', border: '2px solid #ededed', borderRadius: '0.8rem', padding: '0.7rem 2.5rem', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            Dropdown for medicine
          </button>
        </div>
      </main>
      {/* Add extra vertical space for scrolling, for About Us cards */}
      <div style={{ height: "120vh" }}></div>

      {/* About Us Section */}
      <div className="w-full flex flex-col items-center justify-center py-12">
        <h2 className="text-3xl font-bold text-brand mb-4" style={{ textAlign: 'center' }}>About Us</h2>
        <p className="text-lg text-gray-300 max-w-2xl text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          MedSecure AI is dedicated to transforming rural healthcare by leveraging artificial intelligence and transparent supply chain practices. Our mission is to empower clinics and health organizations with smart medicine management, ensuring timely access and improved patient outcomes.
        </p>
      </div>

      {/* About Us Cards: three equispaced cards */}
      <footer className="mt-auto bg-night border-t border-brand/20 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </footer>
    </div>
  );
}
