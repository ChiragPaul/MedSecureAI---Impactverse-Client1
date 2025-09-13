"use client";

// Ensure font and color for entire page
export default function AboutUsPage() {
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#ededed', background: 'var(--background)', minHeight: '100vh' }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-night text-white">
        <h1 className="text-4xl font-bold mb-8 text-brand">About Us</h1>
        <div className="max-w-xl mx-auto text-center text-lg">
          <p>
            We are dedicated to transforming healthcare with AI-driven solutions, ensuring security, privacy, and innovation for every patient and provider. Our mission is to empower users with intelligent tools for better health outcomes and seamless experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
