import React from 'react'

export default function FoodResults({results}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto">
      <ul>
        {results.map((result, id) => {
          return (
            <li key={id} className="border-b border-gray-200 hover:bg-gray-100">
              <div className="px-3 py-2">
                <h3 className="text-md font-semibold text-gray-800">{result.title}</h3>
                <p className="mt-1 text-xs text-gray-600">
                  120 Kcal - 30g Protein, 20g Carbs
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
