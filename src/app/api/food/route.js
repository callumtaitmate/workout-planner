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
    return NextResponse.json(food);
}
