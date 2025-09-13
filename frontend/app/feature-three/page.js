import Navbar from "../../components/Navbar";
export default function AIChat() {
  return (
    <div className="min-h-screen bg-night text-white flex flex-col" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <main className="flex-grow px-6 py-10 flex flex-col items-center justify-center">
        <div className="w-full flex flex-row gap-8 justify-center items-start">
          {/* Chat history table on the left */}
          <div className="bg-black border border-brand/30 rounded-2xl shadow-md p-6 flex flex-col min-w-[320px] max-w-xs" style={{ fontFamily: 'Arial, sans-serif' }}>
            <h3 className="text-lg font-bold text-brand mb-4">Chat History</h3>
            <table className="w-full text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
              <thead>
                <tr className="text-brand">
                  <th className="py-2 px-2 text-left">User</th>
                  <th className="py-2 px-2 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 px-2">You</td>
                  <td className="py-1 px-2">Hello!</td>
                </tr>
                <tr>
                  <td className="py-1 px-2">AI</td>
                  <td className="py-1 px-2">Hi, how can I help you?</td>
                </tr>
                {/* More rows can be added dynamically */}
              </tbody>
            </table>
          </div>
          {/* AI Chat Area */}
          <div className="bg-black border border-brand/30 rounded-2xl shadow-md w-full max-w-2xl p-6 flex flex-col" style={{ fontFamily: 'Arial, sans-serif', minHeight: 'calc(600px + 6cm)' }}>
            <h2 className="text-2xl font-bold text-brand mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>AI Chat</h2>
            <div className="flex-1 overflow-y-auto mb-4" style={{ minHeight: '400px', fontFamily: 'Arial, sans-serif' }}>
              {/* Chat messages will appear here */}
              <div className="text-gray-400 mb-6">No messages yet. Start the conversation!</div>
              <div className="mb-2">
                <h4 className="text-lg font-bold text-brand mb-2">Recommended Prompts:</h4>
                <ul className="space-y-2">
                  <li className="recommended-prompt px-4 py-2 rounded-lg bg-night border border-brand/30 cursor-pointer hover:bg-brand/10 hover:text-brand transition" style={{ fontFamily: 'Arial, sans-serif' }}>What are the latest trends in healthcare AI?</li>
                  <li className="recommended-prompt px-4 py-2 rounded-lg bg-night border border-brand/30 cursor-pointer hover:bg-brand/10 hover:text-brand transition" style={{ fontFamily: 'Arial, sans-serif' }}>How can I secure my medical data?</li>
                  <li className="recommended-prompt px-4 py-2 rounded-lg bg-night border border-brand/30 cursor-pointer hover:bg-brand/10 hover:text-brand transition" style={{ fontFamily: 'Arial, sans-serif' }}>Show me a summary of my recent health records.</li>
                  <li className="recommended-prompt px-4 py-2 rounded-lg bg-night border border-brand/30 cursor-pointer hover:bg-brand/10 hover:text-brand transition" style={{ fontFamily: 'Arial, sans-serif' }}>What are the benefits of AI in diagnostics?</li>
                  <li className="recommended-prompt px-4 py-2 rounded-lg bg-night border border-brand/30 cursor-pointer hover:bg-brand/10 hover:text-brand transition" style={{ fontFamily: 'Arial, sans-serif' }}>Give me tips for healthy living.</li>
                </ul>
              </div>
            </div>
            <form className="flex" style={{ fontFamily: 'Arial, sans-serif' }}>
              <input
                type="text"
                className="flex-1 rounded-l-lg px-4 py-2 bg-night text-white border border-brand/30 focus:outline-none"
                placeholder="Type your message..."
                style={{ fontFamily: 'Arial, sans-serif' }}
              />
              <button
                type="submit"
                className="bg-brand text-white px-6 py-2 rounded-r-lg font-bold hover:bg-green-600 transition"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
        {/* Extra vertical space for scrolling, for About Us cards */}
        <div style={{ height: "180vh" }}></div>

        {/* About Us Section at the bottom */}
        <div className="w-full flex flex-col items-center justify-center py-12">
          <h2 className="text-3xl font-bold mb-4" style={{ textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', color: '#fff' }}>About Us</h2>
          <p className="text-lg max-w-2xl text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#fff' }}>
            MedSecure AI is dedicated to transforming rural healthcare by leveraging artificial intelligence and transparent supply chain practices. Our mission is to empower clinics and health organizations with smart medicine management, ensuring timely access and improved patient outcomes.
          </p>
        </div>
        {/* About Us Cards: parallel, shifted by 3cm left/right, like landing page */}
      </main>
      <footer className="mt-auto bg-night border-t border-brand/20 py-6 text-center text-gray-400" style={{ fontFamily: 'Arial, sans-serif' }}>
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </footer>
    </div>
  );
}
