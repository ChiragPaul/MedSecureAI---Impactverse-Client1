"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function MedDataPage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://csv-to-mongo-convrter.onrender.com/data");
        const json = await res.json();
        setRecords(json.records || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className="min-h-screen bg-night text-white flex flex-col"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "var(--background)",
      }}
    >
      <Navbar />

      {/* About MedData */}
      <section
        className="px-6 md:px-12 flex items-center justify-center relative overflow-hidden"
        style={{ minHeight: "50vh" }}
      >
        <div className="w-full max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">
            About MedData
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            MedData connects directly to your MongoDB collection and displays
            essential medicines in an organized, dynamic table.
          </p>
        </div>
      </section>

      {/* Table */}
      <main className="flex-grow px-6 md:px-12 py-8">
        <div className="bg-black/60 backdrop-blur-sm border border-brand/30 rounded-2xl shadow-2xl shadow-brand/10 overflow-hidden">
          <div className="p-6 border-b border-brand/20">
            <h3 className="text-xl font-bold text-brand mb-2">
              Medicine Database
            </h3>
            <p className="text-gray-400 text-sm">
              All fields are fetched directly from MongoDB Atlas
            </p>
          </div>

          {loading ? (
            <p className="p-6 text-gray-400">Loading data...</p>
          ) : records.length === 0 ? (
            <p className="p-6 text-gray-400">No data found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black/40 text-brand border-b border-brand/20">
                    {Object.keys(records[0]).map((key) => (
                      <th
                        key={key}
                        className="text-left px-6 py-4 font-semibold capitalize"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-brand/10 hover:bg-black/40 transition-colors duration-200"
                    >
                      {Object.keys(records[0]).map((key) => (
                        <td key={key} className="px-6 py-4 text-gray-300">
                          {row[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-night border-t border-brand/20 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} MedSecure AI. All rights reserved.
      </footer>
    </div>
  );
}
