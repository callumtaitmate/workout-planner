"use client";
import React, { useState } from "react";
import { useOverviewStore } from "@/app/store/store";
import Weeks from "./overview/weeks";
import OverviewItem from "./overview/OverviewItem";
import DayTotal from "./overview/DayTotal";
import WeekTotal from "./overview/WeekTotal";
export function Overview() {
  const { overview } = useOverviewStore((state) => ({
    overview: state.overview,
  }));
  

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">Weekly Overview</h3>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <Weeks />
        <OverviewItem  />
        <DayTotal />

        <div className="">
          <WeekTotal />

          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">
              Export
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign up to save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
