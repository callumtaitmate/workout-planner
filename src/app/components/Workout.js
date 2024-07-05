import React from 'react'
import { AddFood } from "../components/plannerComponents/AddFood";
import { ConfigureFood } from "../components/plannerComponents/ConfigureFood";
import { Overview } from "../components/plannerComponents/Overview";

export default function Workout() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AddFood />
        <ConfigureFood />
        <Overview />
      </div>
  )
}
