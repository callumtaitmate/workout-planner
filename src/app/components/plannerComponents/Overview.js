"use client";
import React from "react";
import { useOverviewStore } from "@/app/store/store";
import Weeks from "./overview/weeks";
import OverviewItem from "./overview/OverviewItem";
import Download from "./overview/Download";
import DayTotal from "./overview/DayTotal"
import WeekTotal from "./overview/WeekTotal"

export function Overview() {
  const { clearAll } = useOverviewStore((state) => ({
    clearAll: state.clearAll,
  }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-3">Weekly Overview</h3>
      <Weeks />
      <OverviewItem />
      <div className="bg-gray-100 rounded-lg px-3 py-2 shadow-md mt-2">
        <div>
          <DayTotal />
          <WeekTotal />
          <div className="">
            <button
              onClick={() => clearAll()}
              className="w-full text-center bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Clear All
            </button>
            <div className="mt-5">
              <Download />
              <button className="mt-1 w-full text-center cursor-not-allowed bg-green-300 hover:bg-green-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign up to save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
