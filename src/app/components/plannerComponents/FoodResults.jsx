import React from "react";
import { useFoodStore } from "@/app/store/store";

export const dynamic = "force-dynamic";

export default function FoodResults({ results }) {
  const addFood = useFoodStore((state) => state.addFood);

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
                  {result.food.label}{" "}
                </h3>

                <p className="mt-1 text-xs text-gray-600">
                  <b>{result.food.nutrients.ENERC_KCAL} kCal</b> -{" "}
                  {result.food.nutrients.CHOCDF}g Carbs,{" "}
                  {result.food.nutrients.FAT}g Fat,{" "}
                  {result.food.nutrients.PROCNT}g Protein
                </p>
              </div>
              <button
                className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline mr-3"
                onClick={() => addFood(result)}
              >
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
