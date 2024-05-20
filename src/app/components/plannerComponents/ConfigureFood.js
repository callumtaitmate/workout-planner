"use client";
import { useState } from "react";
import { useFoodStore, useOverviewStore } from "@/app/store/store";

export function ConfigureFood() {
  const { food, clearFood } = useFoodStore((state) => ({
    food: state.food,
    clearFood: state.clearFood,
  }));

  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [prot, setProt] = useState(0);
  const [label, setLabel] = useState("");

  const handleQuantity = (e) => {
    setQuantity(e);
  };

  const updateMacros = () => {
    food.forEach((item) => {
      setKcal(Math.trunc((item.food.nutrients.ENERC_KCAL / 100) * quantity));
      setCarb(Math.trunc((item.food.nutrients.CHOCDF / 100) * quantity));
      setFat(Math.trunc((item.food.nutrients.FAT / 100) * quantity));
      setProt(Math.trunc((item.food.nutrients.PROCNT / 100) * quantity));
      setLabel(item.food.label);
    });
  };

  const handlePrice = (e) => {
    setPrice(e);
  };

  const updateOverview = useOverviewStore((state) => state.addToOverview);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Configure Food</h3>
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto">
        <ul>
          {food.map((result, id) => {
            if (id === 0) {
              return (
                <li key={id} className="border-b border-gray-200 bg-gray-100">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="px-3 py-2 ">
                        <h3 className="text-md font-semibold text-gray-800">
                          {result.food.label} - 100g{" "}
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
                        onClick={() => clearFood(result.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="red"
                        >
                          {" "}
                          <path
                            fillRule="evenodd"
                            d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="px-3 py-2 mt-2">
                      <h3 className="text-xs font-semibold text-blue-500">
                        Adjust Weight <span>(Grams)</span>
                      </h3>

                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => handleQuantity(e.target.value)}
                        className="mt-1 focus:ring-gray-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1 px-2 mr-2 mt-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={updateMacros}
                      >
                        Calculate Macros
                      </button>
                      <p className="mt-3 text-xs text-center text-white bg-gray-500 py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline">
                        <b>{kcal}kCal</b> - {carb}g Carbs | {fat}g Fat | {prot}g
                        Protein
                      </p>
                    </div>
                    <div className="px-3 py-2">
                      <h3 className="text-xs font-semibold text-blue-500">
                        Price <span>(GBP)</span>
                      </h3>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => handlePrice(e.target.value)}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex justify-end mt-2 mb-2">
                      <button
                        onClick={() =>
                          updateOverview(label, kcal, carb, fat, prot, price)
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        + Current Day
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">
                        + All Days
                      </button>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
