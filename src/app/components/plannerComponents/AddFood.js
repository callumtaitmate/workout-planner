"use client";
import React, { useState, useEffect } from "react";
import FoodResults from "./addfood/FoodResults";
export function AddFood({}) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/apitest?query=${query}`);
      const food = await response.json();
      setResults(food);
    };
    if (query !== "" && query.length > 2) {
      fetchData();
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Add Food</h3>
      <p className="text-xs text-red-400 font-semibold mb-1">
        (Search Functionality In Infancy)
      </p>
      <div className="relative mb-4 rounded-md">
        <input
          className="w-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 block sm:text-sm rounded-md border-b border-gray-300"
          type="text"
          placeholder="Search for food"
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>{" "}
      {results != null && (
        <FoodResults results={results} setResults={setResults} />
      )}
    </div>
  );
}
