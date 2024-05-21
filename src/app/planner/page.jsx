import { AddFood } from "../components/plannerComponents/AddFood";
import { ConfigureFood } from "../components/plannerComponents/ConfigureFood";
import { Overview } from "../components/plannerComponents/Overview";
export default function Planner() {
  return (
    <div className="min-h-screen max-w-7xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:px-8">
      <div className="my-2">
        <h1 className="text-3xl font-bold text-gray-800">Basic Meal Budget</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AddFood />
        <ConfigureFood />
        <Overview />
      </div>
    </div>
  );
}
