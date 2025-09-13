import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-night text-white flex flex-col" style={{ fontFamily: 'Arial, Helvetica, sans-serif', background: 'var(--background)' }}>
      <Navbar />

      {/* 1st VH: Hero */}
      <section className="px-6 md:px-12 flex items-center justify-center relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl relative z-10">
          <div className="order-2 md:order-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">MedSecure AI</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Smart medicine management for rural healthcare. We forecast demand accurately and track supply transparently so essential medicines are available when and where they are needed.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-brand to-brand/80 rounded-xl font-bold hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-brand/50 rounded-xl font-bold hover:bg-brand/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <img src="/imagee3.avif" alt="MedSecure AI" className="w-full max-w-520 rounded-2xl shadow-2xl shadow-brand/20 transition-all duration-500 group-hover:shadow-brand/40 group-hover:scale-105" style={{ objectFit: 'cover' }} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd VH: Motive & Problem */}
      <section className="px-6 md:px-12 flex items-center justify-center relative" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-brand/5 to-transparent"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl relative z-10">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-brand via-white to-brand/80 bg-clip-text text-transparent">Motive & Problem Statement</h3>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed mb-8">
              We aim to bridge the medicine availability gap in rural healthcare by supporting health workers and administrators with reliable, AI-powered insights for procurement and distribution.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
                <h4 className="text-brand font-bold mb-2">AI-Powered Forecasting</h4>
                <p className="text-sm text-gray-300">Predict demand with 95% accuracy</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
                <h4 className="text-brand font-bold mb-2">Real-time Tracking</h4>
                <p className="text-sm text-gray-300">Monitor supply chain transparency</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <img src="/image2.png" alt="Motive and problem statement illustration" className="w-full max-w-420 rounded-2xl shadow-2xl shadow-brand/20 transition-all duration-500 group-hover:shadow-brand/40 group-hover:scale-105" style={{ objectFit: 'cover' }} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd VH: About Us */}
      <section className="px-6 md:px-12 flex items-center justify-center relative" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand/5 to-transparent"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl relative z-10">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">About Us</h3>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-8">
              MedSecure AI is a technology-driven initiative transforming rural medicine logistics. We combine AI forecasting with transparent tracking to empower PHCs, CHCs, and health departments.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-brand mb-1">500+</div>
                <div className="text-sm text-gray-300">Health Centers</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-brand mb-1">95%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <img src="/WhatsApp%20Image%202025-09-12%20at%2011.36.06_e33f5593.jpg" alt="AI doctor and robot" className="w-full max-w-420 rounded-2xl shadow-2xl shadow-brand/20 transition-all duration-500 group-hover:shadow-brand/40 group-hover:scale-105" style={{ objectFit: 'cover' }} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-night border-t border-brand/20 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} MedSecure AI. All rights reserved.
      </footer>
    </div>
  );
}
