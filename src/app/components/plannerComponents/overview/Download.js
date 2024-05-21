import React from "react";
import { useOverviewStore } from "@/app/store/store";

export default function Download() {
  const { overview } = useOverviewStore((state) => ({
    overview: state.overview,
  }));

  return (
    <button className="bg-blue-300 hover:bg-blue-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
      Export
    </button>
  );
}
