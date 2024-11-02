/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Translation() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/translate",
      { "english-text": text },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setTranslatedText(response.data.translated_text);
  };

  return (
    <div>
      <Navbar />
      <section className="flex justify-center items-center space-x-6">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="text-[100px] border-4  border-blue-300"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="">
            Translate
          </button>
        </form>
        <br />
        <div>
          {translatedText && (
            <div className="text-[100px]">{translatedText}</div>
          )}
        </div>
      </section>
    </div>
  );
}
export default Translation;
