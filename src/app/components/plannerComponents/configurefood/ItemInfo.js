import React from "react";

export default function ItemInfo({hello, quantity}) {
  
  const ENERC_KCAL = parseInt(hello.result.food.nutrients.ENERC_KCAL);
  const CHOCDF = parseInt(hello.result.food.nutrients.CHOCDF);
  const FAT = parseInt(hello.result.food.nutrients.FAT);
  const PROCNT = parseInt(hello.result.food.nutrients.PROCNT);

  return (
    <div className="flex items-center justify-between">
      <div className="px-3 py-2 ">
        <h3
          className={
            hello.result.food.label === "Add food to start"
              ? "text-md font-semibold text-blue-500"
              : "text-md font-semibold text-gray-800"
          }
        >
          {hello.result.food.label} - {quantity}{" "}g
        </h3>
        <p className="mt-1 text-xs text-gray-600">
          <b>{ENERC_KCAL}kCal</b> - {CHOCDF}g Carbs | {FAT}g Fat | {PROCNT}g
          Protein
        </p>
      </div>
    </div>
  );
}
