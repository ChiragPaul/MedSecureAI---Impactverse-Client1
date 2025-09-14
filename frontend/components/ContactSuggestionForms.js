"use client";
import { useState } from "react";

export default function ContactSuggestionForms() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [suggestionName, setSuggestionName] = useState("");
  const [suggestionEmail, setSuggestionEmail] = useState("");
  const [suggestionMessage, setSuggestionMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(
      `Contact form submitted:\nName: ${contactName}\nEmail: ${contactEmail}\nMessage: ${contactMessage}`
    );
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    alert(
      `Suggestion form submitted:\nName: ${suggestionName}\nEmail: ${suggestionEmail}\nMessage: ${suggestionMessage}`
    );
    setSuggestionName("");
    setSuggestionEmail("");
    setSuggestionMessage("");
  };

  return (
    <section className="min-h-screen bg-night px-6 py-12 md:px-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Us Form */}
        <div className="bg-black/40 backdrop-blur-sm border border-brand/30 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-brand mb-4">Contact Us</h3>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full radiant-input px-4 py-3 rounded-xl"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full radiant-input px-4 py-3 rounded-xl"
              required
            />
            <textarea
              placeholder="Your Message"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              className="w-full radiant-input px-4 py-3 rounded-xl h-24 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-brand to-brand/80 rounded-xl font-bold hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Suggestion Form */}
        <div className="bg-black/40 backdrop-blur-sm border border-brand/30 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-brand mb-4">Suggestion Form</h3>
          <form onSubmit={handleSuggestionSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={suggestionName}
              onChange={(e) => setSuggestionName(e.target.value)}
              className="w-full radiant-input px-4 py-3 rounded-xl"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={suggestionEmail}
              onChange={(e) => setSuggestionEmail(e.target.value)}
              className="w-full radiant-input px-4 py-3 rounded-xl"
              required
            />
            <textarea
              placeholder="Your Suggestion"
              value={suggestionMessage}
              onChange={(e) => setSuggestionMessage(e.target.value)}
              className="w-full radiant-input px-4 py-3 rounded-xl h-24 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-brand to-brand/80 rounded-xl font-bold hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 transform hover:scale-105"
            >
              Submit Suggestion
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
