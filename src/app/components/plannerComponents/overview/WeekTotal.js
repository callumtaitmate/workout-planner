import React from "react";
import { useOverviewStore } from "@/app/store/store";

export default function WeekTotal() {
  const { overview } = useOverviewStore((state) => ({
    overview: state.overview,
  }));

  let sets = overview.reduce(
    (accumulator, current) => accumulator + current.configure.result.sets,
    0
  );

  let totalRepsCalc = overview.map(
    (p) => p.configure.result.reps * p.configure.result.sets
  );

  let totalReps = totalRepsCalc.reduce(
    (accumulator, current) => accumulator + current,
    0
  );

  let perSetWeight = overview.map(
    (p) =>
      p.configure.result.reps *
      p.configure.result.sets *
      p.configure.result.weight
  );

  let totalWeight = perSetWeight.reduce(
    (accumulator, current) => accumulator + current,
    0
  );

  return (
    <div>
      <div className="display flex justify-between">
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2  rounded focus:outline-none focus:shadow-outline">
          <b>Weekly Reps</b>
        </p>
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline">
          <b>{totalReps} Reps</b>
        </p>
      </div>

      <div className="display flex justify-between">
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2  rounded focus:outline-none focus:shadow-outline">
          <b>Weekly Sets</b>
        </p>
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline">
          <b>{sets} Sets</b>
        </p>
      </div>
      <div className="display flex justify-between">
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2  rounded focus:outline-none focus:shadow-outline">
          <b>Weekly Weight</b>
        </p>
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline">
          <b>{totalWeight} Kgs</b>
        </p>
      </div>
    </div>
  );
}
