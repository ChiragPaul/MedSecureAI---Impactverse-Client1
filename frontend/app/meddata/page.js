"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function MedDataPage() {
  const [activeTab] = useState(0);

  return (
    <div className="min-h-screen bg-night text-white flex flex-col" style={{ fontFamily: 'Arial, Helvetica, sans-serif', background: 'var(--background)' }}>
      <Navbar />
      {/* About MedData (1 VH, slide in) */}
      <section className="px-6 md:px-12 flex items-center justify-center relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/10"></div>
        <div className="w-full max-w-5xl text-center slide-in relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">About MedData</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            MedData presents a simplified, readable catalogue of essential medicines with clear identifiers and descriptions. It is designed for quick lookups and smooth reviews by staff in PHCs and CHCs.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
              <h4 className="text-brand font-bold mb-2">Quick Access</h4>
              <p className="text-sm text-gray-300">Instant medicine lookup</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
              <h4 className="text-brand font-bold mb-2">Clear Details</h4>
              <p className="text-sm text-gray-300">Comprehensive descriptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subnav removed for a cleaner look */}

      {/* Big table area */}
      <main className="flex-grow px-6 md:px-12 py-8">
        <div className="bg-black/60 backdrop-blur-sm border border-brand/30 rounded-2xl shadow-2xl shadow-brand/10 overflow-hidden">
          <div className="p-6 border-b border-brand/20">
            <h3 className="text-xl font-bold text-brand mb-2">Medicine Database</h3>
            <p className="text-gray-400 text-sm">Essential medicines catalog with detailed information</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-black/40 text-brand border-b border-brand/20">
                  <th className="text-left px-6 py-4 font-semibold">Medicine ID</th>
                  <th className="text-left px-6 py-4 font-semibold">Product Name</th>
                  <th className="text-left px-6 py-4 font-semibold">Medicine Description</th>
                </tr>
              </thead>
              <tbody>
                {sampleRows(activeTab).map((row, idx) => (
                  <tr key={idx} className="border-b border-brand/10 hover:bg-black/40 transition-colors duration-200">
                    <td className="px-6 py-4 font-mono text-brand font-semibold">{row.id}</td>
                    <td className="px-6 py-4 font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-gray-300">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="bg-night border-t border-brand/20 py-6 text-center text-gray-400">© {new Date().getFullYear()} MedSecure AI. All rights reserved.</footer>
    </div>
  );
}

function sampleRows(activeTab) {
  const all = [
    { id: "MED-001", name: "Paracetamol 500mg", desc: "Analgesic and antipyretic for mild pain and fever." },
    { id: "MED-002", name: "Amoxicillin 250mg", desc: "Broad-spectrum antibiotic for bacterial infections." },
    { id: "MED-003", name: "Oral Rehydration Salts", desc: "Electrolyte solution for dehydration management." },
    { id: "MED-004", name: "Ibuprofen 400mg", desc: "NSAID used for inflammation and pain relief." },
    { id: "MED-005", name: "Metformin 500mg", desc: "First-line therapy for type 2 diabetes." },
    { id: "MED-006", name: "Insulin Regular", desc: "Short-acting insulin for glycemic control." },
    { id: "MED-007", name: "Zinc Sulfate 20mg", desc: "Supplement used in diarrheal disease." },
    { id: "MED-008", name: "Atenolol 50mg", desc: "Beta-blocker for hypertension and angina." },
    { id: "MED-009", name: "Amlodipine 5mg", desc: "Calcium channel blocker for high blood pressure." },
    { id: "MED-010", name: "Losartan 50mg", desc: "ARB used to treat hypertension." },
    { id: "MED-011", name: "Cotrimoxazole DS", desc: "Antibiotic combination for various infections." },
    { id: "MED-012", name: "Azithromycin 500mg", desc: "Macrolide antibiotic for respiratory infections." },
    { id: "MED-013", name: "Doxycycline 100mg", desc: "Tetracycline antibiotic for bacterial infections." },
    { id: "MED-014", name: "Omeprazole 20mg", desc: "Proton pump inhibitor for acid peptic disease." },
    { id: "MED-015", name: "Iron Folic Acid", desc: "Supplement used in anemia and pregnancy." },
  ];
  return activeTab % 2 === 0 ? all : [...all].reverse();
}


