"use client";
import { useState } from "react";
import {
  useConfigureSotre,
  useFoodStore,
  useOverviewStore,
  useDayStore,
} from "@/app/store/store";
import { v4 as uuidv4 } from 'uuid';

export function ConfigureFood() {
  const { food, clearFood } = useFoodStore((state) => ({
    food: state.food,
    clearFood: state.clearFood,
  }));
  const { hello } = useConfigureSotre((state) => ({
    hello: state.configure,
  }));

  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [prot, setProt] = useState(0);
  const [label, setLabel] = useState();
  const [id, setId] = useState("")

  const handleQuantity = (e) => {
    setQuantity(e);
  };



  const updateMacros = () => {
    setKcal(
      Math.trunc((hello.result.food.nutrients.ENERC_KCAL / 100) * quantity)
    );
    setCarb(Math.trunc((hello.result.food.nutrients.CHOCDF / 100) * quantity));
    setFat(Math.trunc((hello.result.food.nutrients.FAT / 100) * quantity));
    setProt(Math.trunc((hello.result.food.nutrients.PROCNT / 100) * quantity));
    setLabel(hello.result.food.label);
    setId(uuidv4);
  };

  const handlePrice = (e) => {
    setPrice(e);
  };

  const postCalcObject = {
    quantity: quantity,
    price: price,
    kcal: kcal,
    carb: carb,
    fat: fat,
    prot: prot,
    label: label,
    day: day,
    id: id,
  };

  const updateOverview = useOverviewStore((state) => state.addToOverview);
  const { postCalcArray } = useOverviewStore((state) => ({
    overview: state.overview,
  }));

  const handleClick = (postCalcObject) => {
    updateOverview(postCalcObject);
  };
  console.log(postCalcObject)
  

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Configure Food</h3>
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto">
        <ul>
          <li className="border-b border-gray-200 bg-gray-100">
            <div>
              <div className="flex items-center justify-between">
                <div className="px-3 py-2 ">
                  <h3 className="text-md font-semibold text-gray-800">
                    {hello.result.food.label} - 100g{" "}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600">
                    <b>{hello.result.food.nutrients.ENERC_KCAL}kCal</b> -{" "}
                    {hello.result.food.nutrients.CHOCDF}g Carbs |{" "}
                    {hello.result.food.nutrients.FAT}g Fat |{" "}
                    {hello.result.food.nutrients.PROCNT}g Protein
                  </p>
                </div>
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
                  onClick={() => handleClick(postCalcObject)}
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
        </ul>
      </div>
    </div>
  );
}
