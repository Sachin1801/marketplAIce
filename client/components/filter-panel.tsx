"use client";

import React, { useState } from "react";

export function FilterPanel() {
  const [level, setLevel] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  const categoryOptions = [
    "Artificial Intelligence",
    "Audio",
    "Chat to",
    "Chatbots",
    "Code",
    "Customers & Users",
    "Design",
    "Education",
    "Financial",
    "Image",
  ];

  const handleLevelChange = (selectedLevel: string) => {
    setLevel((prev) => (prev === selectedLevel ? null : selectedLevel));
  };

  const handleCategoryChange = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setLevel(null);
    setCategories([]);
  };

  return (
    <div className="w-72 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-md space-y-6">
      {/* Section: Level */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Level</h2>
        <div className="flex flex-col gap-2">
          {["Beginner", "Intermediate", "Advanced"].map((item) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                level === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
              onClick={() => handleLevelChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Section: Category */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Category</h2>
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                categories.includes(category)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Clear All Filters */}
      <button
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-md"
        onClick={clearFilters}
      >
        Clear All Filters
      </button>
    </div>
  );
}
