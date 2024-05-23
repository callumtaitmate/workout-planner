import React from "react";

export default function ItemInfo({hello}) {
  return (
    <div className="flex items-center justify-between">
      <div className="px-3 py-2 ">
        <h3 className="text-md font-semibold text-gray-800">
          {hello.result.food.label} - 100g{" "}
        </h3>
        <p className="mt-1 text-xs text-gray-600">
          <b>{hello.result.food.nutrients.ENERC_KCAL}kCal</b> -{" "}
          {hello.result.food.nutrients.CHOCDF}g Carbs |{" "}
          {hello.result.food.nutrients.FAT}g Fat |{" "}
          {hello.result.food.nutrients.PROCNT}g Protein
        </p>
      </div>
    </div>
  );
}
