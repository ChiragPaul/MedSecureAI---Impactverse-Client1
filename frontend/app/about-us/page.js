"use client";

import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-night text-white">
      {/* Section 1 */}
      <section
        className="flex items-center justify-center px-6 md:px-12"
        style={{ minHeight: "100vh" }}
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We envision a future where rural healthcare is empowered by
            AI-driven medicine management, ensuring no one is left without
            essential medicines.
          </p>
          <div className="relative mx-auto max-w-full h-96">
            <Image
              fill
              src="/image2.png"
              alt="Vision illustration"
              className="object-cover rounded-2xl shadow-2xl shadow-brand/20"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="flex items-center justify-center px-6 md:px-12"
        style={{ minHeight: "100vh" }}
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Our AI forecasts demand with high accuracy and tracks supply
            transparently, enabling timely procurement and distribution of
            medicines.
          </p>
          <div className="relative mx-auto max-w-full h-96">
            <Image
              fill
              src="/WhatsApp Image 2025-09-12 at 11.36.06_e33f5593.jpg"
              alt="How we work illustration"
              className="object-cover rounded-2xl shadow-2xl shadow-brand/20"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="flex items-center justify-center px-6 md:px-12"
        style={{ minHeight: "100vh" }}
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">
            Impact & Reach
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We have empowered over 500 health centers with a 95% accuracy rate
            in forecasting, improving medicine availability in rural areas.
          </p>
          <div className="relative mx-auto max-w-full h-96">
            <Image
              fill
              src="/WhatsApp Image 2025-09-12 at 11.44.24_36f058b8.jpg"
              alt="Impact and reach illustration"
              className="object-cover rounded-2xl shadow-2xl shadow-brand/20"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
