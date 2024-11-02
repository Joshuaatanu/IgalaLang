/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function genai() {
  const [query, setQuery] = useState("");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTranslation("");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setTranslation(data.translation);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslation("Failed to fetch translation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Igala-English Translator
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleTranslate} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter text for translation"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 ease-in-out
                         placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg
                       hover:bg-blue-600 transition-colors duration-200
                       disabled:bg-blue-300 disabled:cursor-not-allowed
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:ring-offset-2"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  <span>Translating...</span>
                </div>
              ) : (
                "Translate"
              )}
            </button>
          </form>

          {/* Translation Result */}
          {translation && (
            <div className="mt-8 space-y-2">
              <div className="h-px bg-gray-200"></div>
              <h2 className="text-sm font-medium text-gray-500">Translation</h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-800">{translation}</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {translation === "Failed to fetch translation" && (
            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <p className="text-red-600 text-sm">
                Sorry, there was an error processing your translation. Please
                try again.
              </p>
            </div>
          )}
        </div>

        {/* Loading State Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-600">Processing translation...</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-4 text-center text-gray-500 text-sm">
        <p>© 2024 Igala Translator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default genai;
