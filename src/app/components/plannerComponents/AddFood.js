"use client";
import React, { useState, useEffect } from "react";
import FoodResults from "./FoodResults";

export function AddFood({}) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = async (e) => {
    setQuery(e);

    if (query.length > 2) {
      const response = await fetch(`api/food/search?query=${query}`);
      const food = await response.json();
      setResults(food);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Add Food</h3>
      <div className="relative mb-4">
        <input
          className="w-full bg-gray-100 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search for food"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>{" "}
      <FoodResults results={results} />
      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add
      </button>
    </div>
  );
}
