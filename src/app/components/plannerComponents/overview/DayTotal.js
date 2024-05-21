import React from "react";
import { useOverviewStore, useDayStore } from "@/app/store/store";

export default function DayTotal() {
  const { overview } = useOverviewStore((state) => ({
    overview: state.overview,
  }));

  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  overview.map((overviewArray, id) => {
    if (overview.day == day) {
      let kcal = overviewArray.reduce(
        (accumulator, current) => accumulator + current.kcal,
        0
      );

      return (
        <p className="my-3 text-xs text-center text-white bg-gray-500 py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline">
          <b>Day Total:{kcal}</b> Kcal - g Carbs | g Fat | g Protein, GBP
        </p>
      );
    }
    return (
      <div>Hello</div>
    )
  });
}
