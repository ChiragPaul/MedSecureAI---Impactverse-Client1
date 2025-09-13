"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";

export default function AIChat() {
  const REGIONS = [
    "Delhi NCR",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
  ];

  // State management
  const [region, setRegion] = useState(REGIONS[0]);
  const [stockQty, setStockQty] = useState(0);
  const [medicineName, setMedicineName] = useState("");
  const [preferredStockist, setPreferredStockist] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [selectedStockist, setSelectedStockist] = useState("");
  const [medicineMatches, setMedicineMatches] = useState([]);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [sessionId] = useState(() => Date.now().toString());

  // Conversation flow state
  const [conversationState, setConversationState] = useState("welcome"); // welcome, greeting, features, medicine_search, region_selection, stockist_search, order_flow
  const [pendingMedicine, setPendingMedicine] = useState("");
  const [pendingRegion, setPendingRegion] = useState("");

  const chatEndRef = useRef(null);
  const [apiBaseUrl, setApiBaseUrl] = useState(
    "https://medsecureai-impactverse-client1.onrender.com"
  );

  // API functions
  const sendMessage = async (message) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiBaseUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          user: "user",
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      const data = await response.json();

      // Add both user and AI messages to chat history
      setChatHistory((prev) => [
        ...prev,
        { user: "user", message: message, timestamp: new Date().toISOString() },
        {
          user: "ai",
          message: data.message,
          timestamp: data.timestamp,
          data: data.data,
        },
      ]);

      return data;
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prev) => [
        ...prev,
        { user: "user", message: message, timestamp: new Date().toISOString() },
        {
          user: "ai",
          message: "Sorry, I encountered an error. Please try again.",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const searchMedicine = async (medicineName, region) => {
    try {
      const response = await fetch(`${apiBaseUrl}/medicine/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          medicine_name: medicineName,
          region: region,
        }),
        timeout: 30000, // 30 second timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setMedicineMatches(data.matches);
      return data;
    } catch (error) {
      console.error("Error searching medicine:", error);
      // Show error message to user
      setChatHistory((prev) => [
        ...prev,
        {
          user: "ai",
          message: `Sorry, I couldn't search for medicines right now. Error: ${error.message}. Please try again later.`,
          timestamp: new Date().toISOString(),
        },
      ]);
      return null;
    }
  };

  const predictAvailability = async (
    medicineName,
    region,
    selectedMedicine,
    selectedStockist
  ) => {
    try {
      const response = await fetch(`${apiBaseUrl}/medicine/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          medicine_name: medicineName,
          region: region,
          selected_medicine: selectedMedicine,
          selected_stockist: selectedStockist,
        }),
      });

      if (!response.ok) throw new Error("Failed to predict availability");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error predicting availability:", error);
      return null;
    }
  };

  const placeOrder = async (
    medicineName,
    quantity,
    region,
    stockist,
    preferredStockistId
  ) => {
    try {
      const response = await fetch(`${apiBaseUrl}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          medicine_name: medicineName,
          quantity: quantity,
          region: region,
          stockist: stockist,
          preferred_stockist_id: preferredStockistId,
        }),
      });

      if (!response.ok) throw new Error("Failed to place order");
      const data = await response.json();
      setOrderDetails(data);
      setShowOrderPopup(true);
      return data;
    } catch (error) {
      console.error("Error placing order:", error);
      return null;
    }
  };

  // Structured conversation handler
  const handleStructuredConversation = async (message) => {
    const lowerMessage = message.toLowerCase().trim();

    // Add user message to chat
    setChatHistory((prev) => [
      ...prev,
      {
        user: "user",
        message: message,
        timestamp: new Date().toISOString(),
      },
    ]);

    switch (conversationState) {
      case "welcome":
        if (
          lowerMessage.includes("hi") ||
          lowerMessage.includes("hello") ||
          lowerMessage.includes("hey")
        ) {
          setConversationState("greeting");
          setChatHistory((prev) => [
            ...prev,
            {
              user: "ai",
              message: `Hello! I&#39;m your AI assistant for medicine availability. I can help you with:\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines\n❓ Answer questions about our services\n\nWhat would you like to do?`,
              timestamp: new Date().toISOString(),
              type: "features",
            },
          ]);
        } else {
          setChatHistory((prev) => [
            ...prev,
            {
              user: "ai",
              message:
                "Hello! Please say &#39;hi&#39; or &#39;hello&#39; to start our conversation.",
              timestamp: new Date().toISOString(),
            },
          ]);
        }
        break;

      case "greeting":
      case "features":
        if (
          lowerMessage.includes("check") &&
          lowerMessage.includes("availability")
        ) {
          setConversationState("medicine_search");
          setChatHistory((prev) => [
            ...prev,
            {
              user: "ai",
              message:
                "Great! I&#39;ll help you check medicine availability. What&#39;s the name of the medicine you&#39;re looking for?",
              timestamp: new Date().toISOString(),
            },
          ]);
        } else if (
          lowerMessage.includes("stockist") ||
          lowerMessage.includes("stockists")
        ) {
          setConversationState("region_selection");
          setChatHistory((prev) => [
            ...prev,
            {
              user: "ai",
              message:
                "I&#39;ll help you find stockists. Which region are you looking in? Please select from the dropdown or type the region name.",
              timestamp: new Date().toISOString(),
              type: "region_selection",
            },
          ]);
        } else if (
          lowerMessage.includes("order") ||
          lowerMessage.includes("place")
        ) {
          setConversationState("order_flow");
          setChatHistory((prev) => [
            ...prev,
            {
              user: "ai",
              message:
                "I&#39;ll help you place an order. What medicine would you like to order?",
              timestamp: new Date().toISOString(),
            },
          ]);
        } else {
          setChatHistory((prev) => [
            ...prev,
            {
              user: "ai",
              message:
                "I can help you with:\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines\n\nWhat would you like to do?",
              timestamp: new Date().toISOString(),
              type: "features",
            },
          ]);
        }
        break;

      case "medicine_search":
        setPendingMedicine(message);
        setConversationState("region_selection");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `Got it! You&#39;re looking for "${message}". Now, which region would you like to check? Please select from the dropdown or type the region name.`,
            timestamp: new Date().toISOString(),
            type: "region_selection",
          },
        ]);
        break;

      case "region_selection":
        setPendingRegion(message);
        if (conversationState === "medicine_search" || pendingMedicine) {
          // Check medicine availability
          const medicine = pendingMedicine || message;
          const region = message;
          await checkMedicineAvailability(medicine, region);
        } else {
          // Show stockists in region
          await showStockistsInRegion(message);
        }
        break;

      case "order_flow":
        setPendingMedicine(message);
        setConversationState("order_region");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `Great! You want to order "${message}". Which region should I check for availability?`,
            timestamp: new Date().toISOString(),
            type: "region_selection",
          },
        ]);
        break;

      case "order_region":
        setPendingRegion(message);
        await showOrderOptions(pendingMedicine, message);
        break;

      default:
        await sendMessage(message);
    }
  };

  // Event handlers
  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const message = currentMessage.trim();
    setCurrentMessage("");

    await handleStructuredConversation(message);
  };

  const handleMedicineSelect = async (medicine, stockist) => {
    setSelectedMedicine(medicine);
    setSelectedStockist(stockist);
    setMedicineName(medicine);

    // Predict availability
    const prediction = await predictAvailability(
      medicine,
      region,
      medicine,
      stockist
    );
    if (prediction) {
      setChatHistory((prev) => [
        ...prev,
        {
          user: "ai",
          message: `Selected: ${medicine}\nStockist: ${stockist}\n\nPrediction Results:\nStatus: ${
            prediction.status
          }\nConfidence: ${prediction.confidence_band}\nProbability: ${(
            prediction.probability * 100
          ).toFixed(1)}%\n${
            prediction.advice ? `\nAdvice: ${prediction.advice}` : ""
          }`,
          timestamp: new Date().toISOString(),
          type: "prediction_result",
          prediction: prediction,
        },
      ]);
    }

    setMedicineMatches([]);
  };

  // Helper functions for structured conversation
  const checkMedicineAvailability = async (medicine, region) => {
    try {
      const searchResult = await searchMedicine(medicine, region);
      if (searchResult && searchResult.matches.length > 0) {
        setMedicineMatches(searchResult.matches);
        setConversationState("features");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `I found ${searchResult.matches.length} medicine matches for "${medicine}" in ${region}. Please select one from the list below:`,
            timestamp: new Date().toISOString(),
            type: "medicine_selection",
            matches: searchResult.matches,
          },
          {
            user: "ai",
            message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
            timestamp: new Date().toISOString(),
            type: "features",
          },
        ]);
      } else {
        setConversationState("features");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `Sorry, I couldn&#39;t find any matches for "${medicine}" in ${region}. Please try a different medicine or region.`,
            timestamp: new Date().toISOString(),
          },
          {
            user: "ai",
            message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
            timestamp: new Date().toISOString(),
            type: "features",
          },
        ]);
      }
    } catch (error) {
      setConversationState("features");
      setChatHistory((prev) => [
        ...prev,
        {
          user: "ai",
          message: `Sorry, I couldn&#39;t search for medicines right now. Please try again later.`,
          timestamp: new Date().toISOString(),
        },
        {
          user: "ai",
          message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
          timestamp: new Date().toISOString(),
          type: "features",
        },
      ]);
    }
  };

  const showStockistsInRegion = async (region) => {
    try {
      // Get all stockists for the region
      const searchResult = await searchMedicine("", region); // Empty search to get stockists
      if (searchResult && searchResult.matches.length > 0) {
        setConversationState("features");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `Here are the stockists available in ${region}:`,
            timestamp: new Date().toISOString(),
            type: "stockist_list",
            matches: searchResult.matches,
          },
          {
            user: "ai",
            message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
            timestamp: new Date().toISOString(),
            type: "features",
          },
        ]);
      } else {
        setConversationState("features");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `Sorry, I couldn&#39;t find any stockists in ${region}. Please try a different region.`,
            timestamp: new Date().toISOString(),
          },
          {
            user: "ai",
            message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
            timestamp: new Date().toISOString(),
            type: "features",
          },
        ]);
      }
    } catch (error) {
      setConversationState("features");
      setChatHistory((prev) => [
        ...prev,
        {
          user: "ai",
          message: `Sorry, I couldn&#39;t get stockist information right now. Please try again later.`,
          timestamp: new Date().toISOString(),
        },
        {
          user: "ai",
          message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
          timestamp: new Date().toISOString(),
          type: "features",
        },
      ]);
    }
  };

  const showOrderOptions = async (medicine, region) => {
    try {
      const searchResult = await searchMedicine(medicine, region);
      if (searchResult && searchResult.matches.length > 0) {
        setMedicineMatches(searchResult.matches);
        setSelectedMedicine(medicine);
        setRegion(region);
        setConversationState("features");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `Great! I found ${searchResult.matches.length} options for "${medicine}" in ${region}. Please select one and use the order form below to place your order.`,
            timestamp: new Date().toISOString(),
            type: "order_options",
            matches: searchResult.matches,
          },
          {
            user: "ai",
            message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
            timestamp: new Date().toISOString(),
            type: "features",
          },
        ]);
      } else {
        setConversationState("features");
        setChatHistory((prev) => [
          ...prev,
          {
            user: "ai",
            message: `Sorry, I couldn&#39;t find "${medicine}" in ${region}. Please try a different medicine or region.`,
            timestamp: new Date().toISOString(),
          },
          {
            user: "ai",
            message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
            timestamp: new Date().toISOString(),
            type: "features",
          },
        ]);
      }
    } catch (error) {
      setConversationState("features");
      setChatHistory((prev) => [
        ...prev,
        {
          user: "ai",
          message: `Sorry, I couldn&#39;t process your order request right now. Please try again later.`,
          timestamp: new Date().toISOString(),
        },
        {
          user: "ai",
          message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
          timestamp: new Date().toISOString(),
          type: "features",
        },
      ]);
    }
  };

  const handlePlaceOrder = async () => {
    if (!selectedMedicine || stockQty <= 0) {
      alert("Please select a medicine and enter a valid quantity");
      return;
    }

    const order = await placeOrder(
      selectedMedicine,
      stockQty,
      region,
      selectedStockist,
      0
    );
    if (order) {
      setChatHistory((prev) => [
        ...prev,
        {
          user: "user",
          message: `Place order for ${selectedMedicine} (Qty: ${stockQty})`,
          timestamp: new Date().toISOString(),
        },
        {
          user: "ai",
          message: `Order placed successfully!\nOrder ID: ${order.order_id}\nMedicine: ${selectedMedicine}\nQuantity: ${stockQty}\nRegion: ${region}\nStockist: ${selectedStockist}`,
          timestamp: new Date().toISOString(),
          type: "order_confirmation",
        },
        {
          user: "ai",
          message: `\n\nWhat would you like to do next?\n\n🔍 Check medicine availability\n🏥 Find stockists in your region\n📦 Place orders for medicines`,
          timestamp: new Date().toISOString(),
          type: "features",
        },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("chatHistory");
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        setChatHistory(parsedHistory);
      } catch (error) {
        console.error("Error loading chat history:", error);
      }
    } else {
      // Initialize with welcome message if no saved history
      setChatHistory([
        {
          user: "ai",
          message:
            '👋 Welcome! I&#39;m your AI assistant for medicine availability.\n\nPlease say "hi" or "hello" to start our conversation!',
          timestamp: new Date().toISOString(),
          type: "welcome",
        },
      ]);
    }
  }, []);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  return (
    <div
      className="min-h-screen bg-night text-white flex flex-col"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "var(--background)",
      }}
    >
      <Navbar />

      {/* 1st VH: About AI Chat */}
      <section
        className="px-6 md:px-12 flex items-center justify-center relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/10"></div>
        <div className="w-full max-w-5xl text-center slide-in relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent">
            About AI Chat
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A simple, reliable assistant to answer health logistics questions,
            summarize records, and guide ordering. Scroll down to chat and use
            quick controls.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
              <h4 className="text-brand font-bold mb-2">Smart Responses</h4>
              <p className="text-sm text-gray-300">
                AI-powered health logistics
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-brand/20 rounded-xl p-4">
              <h4 className="text-brand font-bold mb-2">Quick Actions</h4>
              <p className="text-sm text-gray-300">
                Streamlined ordering process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd VH: Chat layout */}
      <section className="px-6 md:px-12" style={{ minHeight: "100vh" }}>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-12 gap-6">
          {/* Left rail: Chat History */}
          <aside className="col-span-12 md:col-span-3">
            <div className="bg-black/60 backdrop-blur-sm border border-brand/30 rounded-2xl shadow-2xl shadow-brand/10 p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-brand">Chat History</h3>
                <button
                  onClick={() => {
                    setChatHistory([
                      {
                        user: "ai",
                        message:
                          '👋 Welcome! I&#39;m your AI assistant for medicine availability.\n\nPlease say "hi" or "hello" to start our conversation!',
                        timestamp: new Date().toISOString(),
                        type: "welcome",
                      },
                    ]);
                    localStorage.removeItem("chatHistory");
                  }}
                  className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  Clear
                </button>
              </div>
              <div className="h-[50vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand/30 scrollbar-track-transparent">
                <div className="space-y-3">
                  {chatHistory.map((msg, i) => (
                    <div
                      key={i}
                      className="bg-black/40 border border-brand/20 rounded-lg p-3 hover:bg-black/60 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-brand font-semibold text-sm">
                          {msg.user === "user" ? "You" : "AI"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm whitespace-pre-line">
                        {msg.message}
                      </p>
                      {msg.type === "medicine_selection" && msg.matches && (
                        <div className="mt-2 space-y-1">
                          {msg.matches.slice(0, 3).map((match, idx) => (
                            <button
                              key={idx}
                              onClick={() =>
                                handleMedicineSelect(
                                  match.medicine,
                                  match.stockist
                                )
                              }
                              className="w-full text-left bg-brand/20 hover:bg-brand/30 rounded p-2 text-xs transition-colors"
                            >
                              <div className="font-semibold">
                                {match.medicine}
                              </div>
                              <div className="text-gray-400">
                                Stockist: {match.stockist}
                              </div>
                              <div className="text-brand">
                                Score: {(match.score * 100).toFixed(1)}%
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="bg-black/40 border border-brand/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand"></div>
                        <span className="text-gray-300 text-sm">
                          AI is thinking...
                        </span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Chat box */}
          <div className="col-span-12 md:col-span-9 flex flex-col">
            <div className="bg-black/60 backdrop-blur-sm border border-brand/30 rounded-2xl shadow-2xl shadow-brand/10 p-6 flex-1 min-h-[50vh] mb-6">
              <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-brand/30 scrollbar-track-transparent">
                {chatHistory.length === 0 ? (
                  <div className="text-gray-400 text-center py-8">
                    <div className="text-4xl mb-4">💬</div>
                    <p>No messages yet. Start the conversation!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {chatHistory.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${
                          msg.user === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            msg.user === "user"
                              ? "bg-brand text-white"
                              : "bg-gray-700 text-gray-100"
                          }`}
                        >
                          <div className="whitespace-pre-line">
                            {msg.message}
                          </div>
                          {msg.type === "medicine_selection" && msg.matches && (
                            <div className="mt-3 space-y-2">
                              <p className="text-sm font-semibold">
                                Select a medicine:
                              </p>
                              {msg.matches.slice(0, 5).map((match, idx) => (
                                <button
                                  key={idx}
                                  onClick={() =>
                                    handleMedicineSelect(
                                      match.medicine,
                                      match.stockist
                                    )
                                  }
                                  className="w-full text-left bg-white/10 hover:bg-white/20 rounded p-3 text-sm transition-colors"
                                >
                                  <div className="font-semibold">
                                    {match.medicine}
                                  </div>
                                  <div className="text-xs opacity-75">
                                    Stockist: {match.stockist}
                                  </div>
                                  <div className="text-xs text-brand">
                                    Match: {(match.score * 100).toFixed(1)}%
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                          {msg.type === "order_options" && msg.matches && (
                            <div className="mt-3 space-y-2">
                              <p className="text-sm font-semibold">
                                Available options:
                              </p>
                              {msg.matches.slice(0, 3).map((match, idx) => (
                                <button
                                  key={idx}
                                  onClick={() =>
                                    handleMedicineSelect(
                                      match.medicine,
                                      match.stockist
                                    )
                                  }
                                  className="w-full text-left bg-white/10 hover:bg-white/20 rounded p-3 text-sm transition-colors"
                                >
                                  <div className="font-semibold">
                                    {match.medicine}
                                  </div>
                                  <div className="text-xs opacity-75">
                                    Stockist: {match.stockist}
                                  </div>
                                  <div className="text-xs text-brand">
                                    Match: {(match.score * 100).toFixed(1)}%
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                          {msg.type === "region_selection" && (
                            <div className="mt-3 p-3 bg-blue-500/20 rounded-lg">
                              <p className="text-sm font-semibold mb-2">
                                Available Regions:
                              </p>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                {REGIONS.map((reg) => (
                                  <button
                                    key={reg}
                                    onClick={() => {
                                      setCurrentMessage(reg);
                                      handleSendMessage();
                                    }}
                                    className="text-left p-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
                                  >
                                    {reg}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                          {msg.type === "stockist_list" && msg.matches && (
                            <div className="mt-3 space-y-2">
                              <p className="text-sm font-semibold">
                                Available Stockists:
                              </p>
                              {msg.matches.map((match, idx) => (
                                <div
                                  key={idx}
                                  className="w-full text-left bg-white/10 rounded p-3 text-sm"
                                >
                                  <div className="font-semibold">
                                    {match.stockist}
                                  </div>
                                  <div className="text-xs opacity-75">
                                    Region: {match.region || "Available"}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-gray-700 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand"></div>
                            <span>AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                )}
              </div>
            </div>

            {/* Input bar */}
            <div className="bg-black/60 backdrop-blur-sm border border-brand/30 rounded-xl p-4 flex items-center gap-3 mb-6">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-night text-white px-4 py-3 rounded-lg border border-brand/20 focus:outline-none focus:border-brand transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !currentMessage.trim()}
                className="px-6 py-3 bg-gradient-to-r from-brand to-brand/80 rounded-lg font-bold hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </div>

            {/* Controls row */}
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 md:col-span-8 flex gap-3">
                <input
                  type="number"
                  min="0"
                  value={stockQty}
                  onChange={(e) =>
                    setStockQty(parseInt(e.target.value || "0", 10))
                  }
                  placeholder="Stocks (qty)"
                  className="radiant-input px-4 py-3 rounded-xl w-40"
                />
                <input
                  type="text"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  placeholder="Medicine name"
                  className="radiant-input px-4 py-3 rounded-xl flex-1"
                />
                <button
                  onClick={handlePlaceOrder}
                  className="px-6 py-3 bg-gradient-to-r from-brand to-brand/80 rounded-xl font-bold hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 transform hover:scale-105"
                >
                  Place order
                </button>
              </div>
              <div className="col-span-12 md:col-span-4">
                <label className="block text-sm text-gray-400 mb-2">
                  Region
                </label>
                <select
                  className="w-full radiant-input px-4 py-3 rounded-xl"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Confirmation Popup */}
      {showOrderPopup && orderDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-night border border-brand/30 rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-brand mb-4">
                Order Received!
              </h3>
              <div className="text-gray-300 space-y-2 mb-6">
                <p>
                  <span className="font-semibold">Order ID:</span>{" "}
                  {orderDetails.order_id}
                </p>
                <p>
                  <span className="font-semibold">Medicine:</span>{" "}
                  {orderDetails.details.medicine_name}
                </p>
                <p>
                  <span className="font-semibold">Quantity:</span>{" "}
                  {orderDetails.details.quantity}
                </p>
                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {orderDetails.details.region}
                </p>
                <p>
                  <span className="font-semibold">Stockist:</span>{" "}
                  {orderDetails.details.stockist}
                </p>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                We&#39;ll process your order shortly and send you updates.
              </p>
              <button
                onClick={() => {
                  setShowOrderPopup(false);
                  setOrderDetails(null);
                }}
                className="px-6 py-3 bg-gradient-to-r from-brand to-brand/80 rounded-lg font-bold hover:shadow-lg hover:shadow-brand/25 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-auto bg-night border-t border-brand/20 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} MedSecure AI. All rights reserved.
      </footer>
    </div>
  );
}
