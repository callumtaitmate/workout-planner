import { NextResponse } from "next/server";

async function fetchFood() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
    headers: {},
  });

  const food = await response.json();
  return food;
}

export async function GET(request) {
  const food = await fetchFood();
  const { searchParams } = new URL(request.url);
  console.log(request.url);
  const query = searchParams.get("query");
  console.log(query);

  const filteredFoods = food.filter((food) => {
    return food.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredFoods);
}
