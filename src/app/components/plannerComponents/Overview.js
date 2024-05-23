"use client";
import React from "react";
import { useOverviewStore } from "@/app/store/store";
import Weeks from "./overview/weeks";
import OverviewItem from "./overview/OverviewItem";
import DayTotal from "./overview/DayTotal";
import WeekTotal from "./overview/WeekTotal";
import Download from "./overview/Download";

export function Overview() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Weekly Overview</h3>
      <div className="bg-gray-100 rounded-lg px-3 py-2 shadow-md">
        <h5 className="text-xs font-semibold text-gray-700 mb-2">Select Day:</h5>
        <Weeks />
        <OverviewItem />
        <DayTotal />

        <div>
          <WeekTotal />
          <div className="mt-4 flex justify-end">
            <Download />
            <button className="cursor-not-allowed bg-green-300 hover:bg-green-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign up to save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
