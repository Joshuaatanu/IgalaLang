"use client";

import React, { useState, ChangeEvent } from "react";
import axios from "axios";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null); // Clear error on file selection
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        "http://localhost:5000/process_csv",
        formData,
        { responseType: "blob" }
      );

      // Trigger file download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = "updated_with_pos.csv";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError("An error occurred while processing the file.");
      console.error("File upload error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-center max-w-lg mx-auto border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Upload CSV for POS Tagging</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-4 block w-full border border-gray-300 rounded-lg text-sm"
      />
      <button
        onClick={handleUpload}
        disabled={loading}
        className={`px-6 py-2 rounded-lg text-white font-medium ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {loading ? "Processing..." : "Upload and Process"}
      </button>
      {error && <p className="text-red-600 mt-3">{error}</p>}
    </div>
  );
};

export default FileUpload;
