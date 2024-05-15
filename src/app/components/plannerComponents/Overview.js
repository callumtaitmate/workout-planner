"use client";
import React, { useState } from "react";
import { useOverviewStore } from "@/app/store/store";
import Weeks from "./overview/weeks";

export function Overview() {
  const { label, kcal, carb, fat, prot, price } = useOverviewStore((state) => ({
    label: state.label,
    kcal: state.kcal,
    carb: state.carb,
    fat: state.fat,
    prot: state.prot,
    price: state.price,
  }));


  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">Weekly Overview</h3>
      <Weeks />

      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto mb-2">
        <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 flex  justify-between">
          <h3 className="text-md font-semibold text-gray-800">{label}</h3>
          <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="red"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto">
        <div className="border-b border-gray-200 bg-gray-100 px-3 py-2">
          <h3 className="text-md font-semibold text-gray-800">{label}</h3>
        </div>
      </div>

      <div>
        <p className="mt-3 text-xs text-center text-white bg-gray-500 py-1 px-2 mr-2 mb-2 rounded focus:outline-none focus:shadow-outline">
          <b>{kcal}kCal</b> - {carb}g Carbs | {fat}g Fat | {prot}g Protein
        </p>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">
          Export
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign up to save
        </button>
      </div>
    </div>
  );
}
