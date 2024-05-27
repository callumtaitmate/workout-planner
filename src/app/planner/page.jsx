import { AddFood } from "../components/plannerComponents/AddFood";
import { ConfigureFood } from "../components/plannerComponents/ConfigureFood";
import { Overview } from "../components/plannerComponents/Overview";
import Download from "../components/plannerComponents/overview/Download";
export default function Planner() {
  return (
    <div className="min-h-screen max-w-7xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:px-8">
      <div className="my-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Basic Meal Budget</h1>
      </div>
      
      <button className="mt-1 w-30 text-center cursor-not-allowed bg-green-300 hover:bg-green-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign up to save
              </button>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AddFood />
        <ConfigureFood />
        <Overview />
      </div>
      <p className="text-center mt-5">mealbudget.pro</p>
    </div>
  );
}
