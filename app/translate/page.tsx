"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Translation() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
// hhh
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/translate",
        { "english-text": text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error("Translation error:", error);
      // You might want to add error state handling here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            English to Igala Translator
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="text-input"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Enter English Text
                  </label>
                  <textarea
                    id="text-input"
                    className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type your text here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !text.trim()}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium
                    ${
                      isLoading || !text.trim()
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 transition-colors"
                    }`}
                >
                  {isLoading ? "Translating..." : "Translate"}
                </button>
              </form>
            </div>

            {/* Output Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-sm font-medium text-gray-700 mb-2">
                Igala Translation
              </h2>
              <div className="h-40 p-3 border border-gray-300 rounded-lg bg-gray-50">
                {translatedText ? (
                  <p className="text-lg text-gray-800">{translatedText}</p>
                ) : (
                  <p className="text-gray-400 italic">
                    Translation will appear here...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Translation;
