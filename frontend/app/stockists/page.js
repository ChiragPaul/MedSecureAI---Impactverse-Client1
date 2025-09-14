"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function StockistsPage() {
  const [stockists, setStockists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStockists();
  }, []);

  const fetchStockists = async () => {
    try {
      const response = await fetch("http://localhost:5000/stockists");
      if (!response.ok) {
        throw new Error("Failed to fetch stockists data");
      }
      const data = await response.json();

      // Flatten the data: for each region, create entries for each stockist
      const flattened = [];
      for (const [region, stockistList] of Object.entries(data.stockist_data)) {
        stockistList.forEach((stockist) => {
          flattened.push({
            name: stockist,
            location: region,
          });
        });
      }

      setStockists(flattened);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-night text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading stockists data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-night text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-red-400">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-night text-white flex flex-col"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "var(--background)",
      }}
    >
      <Navbar />
      {/* About Stockists (1 VH, slide in) */}
      <section
        className="px-6 md:px-12 flex items-center justify-center relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/10"></div>
        <div className="w-full max-w-5xl text-center slide-in relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">
            Stockist Directory
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Find registered medicine stockists and suppliers across different
            regions. This directory helps you locate reliable sources for your
            medicine needs.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
              <h4 className="text-brand font-bold mb-2">Regional Coverage</h4>
              <p className="text-sm text-gray-300">
                Stockists across multiple regions
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
              <h4 className="text-brand font-bold mb-2">Verified Suppliers</h4>
              <p className="text-sm text-gray-300">
                Registered and trusted stockists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big table area */}
      <main className="flex-grow px-6 md:px-12 py-8">
        <div className="bg-black/60 backdrop-blur-sm border border-brand/30 rounded-2xl shadow-2xl shadow-brand/10 overflow-hidden">
          <div className="p-6 border-b border-brand/20">
            <h3 className="text-xl font-bold text-brand mb-2">
              Registered Stockists
            </h3>
            <p className="text-gray-400 text-sm">
              Complete list of medicine stockists by location
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-black/40 text-brand border-b border-brand/20">
                  <th className="text-left px-6 py-4 font-semibold">
                    Stockist Name
                  </th>
                  <th className="text-left px-6 py-4 font-semibold">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {stockists.map((stockist, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-brand/10 hover:bg-black/40 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-medium">{stockist.name}</td>
                    <td className="px-6 py-4 text-gray-300">
                      {stockist.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="bg-night border-t border-brand/20 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} MedSecure AI. All rights reserved.
      </footer>
    </div>
  );
}
