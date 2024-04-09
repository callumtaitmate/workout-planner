import React from "react";

export default function FoodResults({ results }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto">
      <ul>
        {results.map((result, id) => {
          return (
            <li
              key={id}
              className="border-b border-gray-200 hover:bg-gray-100 flex items-center justify-between"
            >
              <div className="px-3 py-2">
                <h3 className="text-md font-semibold text-gray-800">
                  {result.title}
                </h3>
                <p className="mt-1 text-xs text-gray-600">
                  {result.id} Kcal - 30g Protein, 20g Carbs
                </p>
              </div>
              <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 9V5a1 1 0 0 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
