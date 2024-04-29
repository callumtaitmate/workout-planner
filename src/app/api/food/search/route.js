import { NextResponse } from "next/server";

async function fetchFood() {
  const response = await fetch(
    "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",

    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "27f58bdcfbmsh26510895797361ap19a0b2jsn8008b49bc913",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    }
  );

  const food = await response.json();
  return food;
}

export async function GET(request) {
  const food = await fetchFood();
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const filteredFoods = food.hints.filter((food) => {
    return food.food.label.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredFoods);
}
