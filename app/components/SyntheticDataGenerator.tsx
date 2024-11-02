"use client";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";

interface SyntheticDataItem {
  Igala: string;
  English: string;
}

const SyntheticDataGenerator: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [numSamples, setNumSamples] = useState<number>(100);
  const [syntheticData, setSyntheticData] = useState<SyntheticDataItem[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const generateData = async () => {
    if (!file) {
      alert("Please upload a CSV file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("num_samples", numSamples.toString());

    try {
      const response = await axios.post(
        "http://localhost:5000/generate_synthetic_data",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSyntheticData(response.data);
    } catch (error) {
      console.error("Error generating synthetic data:", error);
    }
  };

  const exportToCSV = () => {
    if (syntheticData.length === 0) {
      alert("No data to export!");
      return;
    }

    const headers = ["Igala", "English"];
    const csvContent = [
      headers.join(","),
      ...syntheticData.map((item) => `"${item.Igala}","${item.English}"`),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "synthetic_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Synthetic Data Generator
      </h2>

      <div className="mb-6 flex flex-col items-center gap-4">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        <label className="flex items-center gap-2">
          Number of Samples:
          <input
            type="number"
            value={numSamples}
            onChange={(e) => setNumSamples(parseInt(e.target.value))}
            min="1"
            max="20000"
            className="border rounded px-2 py-1 w-24"
          />
        </label>

        <div className="flex gap-4">
          <button
            onClick={generateData}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Generate Data
          </button>

          {syntheticData.length > 0 && (
            <button
              onClick={exportToCSV}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Export to CSV
            </button>
          )}
        </div>
      </div>

      {syntheticData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No.
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Igala
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  English
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {syntheticData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.Igala}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.English}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SyntheticDataGenerator;
