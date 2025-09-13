import Navbar from "../../components/Navbar";
// ...existing code...

// Ensure font and color for entire page
export default function FeatureOne() {
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#ededed', background: 'var(--background)', minHeight: '100vh' }} className="flex flex-col">
      <Navbar />

      <main className="flex flex-col md:flex-row flex-grow px-6 py-10 gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-night border border-brand/30 p-4 rounded-2xl shadow-md flex flex-col items-center relative">
          <h3 className="text-lg font-bold text-brand mb-4">Past Orders & Predictions</h3>
          <table className="w-full text-sm mb-4 sidebar-table" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr className="text-brand">
                <th className="py-3 px-2 text-left border-b border-brand/30">Order Month</th>
                <th className="py-3 px-2 text-left border-b border-brand/30">Prediction</th>
              </tr>
            </thead>
            <tbody>
              {[
                { month: "Jan", pred: "High" },
                { month: "Feb", pred: "Medium" },
                { month: "Mar", pred: "Low" },
                { month: "Apr", pred: "High" },
                { month: "May", pred: "Medium" },
                { month: "Jun", pred: "High" },
                { month: "Jul", pred: "Low" },
                { month: "Aug", pred: "Medium" },
                { month: "Sep", pred: "High" },
                { month: "Oct", pred: "Medium" },
                { month: "Nov", pred: "Low" },
                { month: "Dec", pred: "High" }
              ].map((row, i) => (
                <tr key={row.month} className="sidebar-table-row">
                  <td className="py-3 px-2 border-b border-brand/20">{row.month}</td>
                  <td className="py-3 px-2 border-b border-brand/20">{row.pred}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>

        {/* Content */}
        <section className="flex-grow bg-night border border-brand/30 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-brand mb-4">Feature One</h2>
            {/* Graph removed as requested */}
          {/* Add extra vertical space for scrolling */}
          <div style={{ height: "120vh" }}></div>
        </section>
      </main>

  {/* About Us Cards: first right off center, second left off center, stacked */}
      <footer className="mt-auto bg-night border-t border-brand/20 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </footer>
    </div>
  );
}

