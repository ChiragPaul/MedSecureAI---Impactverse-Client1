"use client";
import { useEffect, useRouter } from "next/navigation";
import NavbarLoggedOut from "../components/NavbarLoggedOut";
import ContactSuggestionForms from "../components/ContactSuggestionForms";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      router.replace("/dashboard");
    }
  }, [router]);

  return (
    <div
      className="min-h-screen bg-night text-white flex flex-col scroll-snap-y-mandatory overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
    >
      <NavbarLoggedOut />
      {/* First viewport section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 scroll-snap-align-start"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">
            MedSecure AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Smart medicine management for rural healthcare. We forecast demand
            accurately and track supply transparently so essential medicines are
            available when and where they are needed.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/log-att/login")}
              className="px-8 py-4 bg-brand hover:bg-brand-dark rounded-xl font-bold text-lg transition shadow-glow"
            >
              Get Started
            </button>
            <button
              onClick={() => router.push("/about-us")}
              className="px-8 py-4 border border-brand/50 hover:bg-brand/10 rounded-xl font-bold text-lg transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Second viewport section with forms */}
      <ContactSuggestionForms />

      {/* Minimal footer */}
      <footer className="bg-night text-gray-400 text-center py-4">
        © {new Date().getFullYear()} MedSecure AI. All rights reserved.
      </footer>
    </div>
  );
}
