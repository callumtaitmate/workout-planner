"use client";
import { useFoodStore } from "@/app/store/store";

export function ConfigureFood() {
  const { food, addFood, removeFood, clearFood } = useFoodStore((state) => ({
    food: state.food,
    addFood: state.addFood,
    removeFood: state.removeFood,
    clearFood: state.clearFood,
  }));
  

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Configure Food</h3>
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto">
        <ul>
          {food.map((result, id) => {
            return (
              <li
                key={id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-2 ">
                      <h3 className="text-md font-semibold text-gray-800">
                        {result.food.label} -{" "}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600">
                        <b>{result.food.nutrients.ENERC_KCAL}kCal</b> -{" "}
                        {result.food.nutrients.CHOCDF}g Carbs |{" "}
                        {result.food.nutrients.FAT}g Fat |{" "}
                        {result.food.nutrients.PROCNT}g Protein
                      </p>
                    </div>

                    <button
                      className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline mr-3"
                      onClick={() => removeFood(result.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="red"
                      >
                        {" "}
                        {/* Change fill to red */}
                        <path
                          fillRule="evenodd"
                          d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="px-3 py-2">
                    <h3 className="text-md font-semibold text-gray-800">
                      Quantity
                    </h3>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <h3 className="text-md font-semibold text-gray-800">
                      Price
                    </h3>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">
          + Current Day
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          + All Days
        </button>
      </div>
    </div>
  );
}
