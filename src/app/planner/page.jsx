import Workout from "../components/Workout"
export default function Planner() {
  return (
    <div className="min-h-screen max-w-7xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:px-8">
      <div className="my-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Basic Split Designer
        </h1>
      </div>

      <button className="mt-1 w-30 text-center cursor-not-allowed bg-green-300 hover:bg-green-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign up to save
      </button>
      <Workout />
      
      <p className="text-center mt-5">mealbudget.pro</p>
    </div>
  );
}
