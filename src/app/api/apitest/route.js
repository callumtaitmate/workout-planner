import { NextResponse } from "next/server";

async function fetchFood(query) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/exercises?muscle=${query}`,

    {
      method: "GET",
      headers: {
        "X-Api-Key": "yo4mmESoQnXlDA56ad+fmg==mv20vHeS5WXbi2bj",
      },
    }
  );

  const data = await response.json();
  return data;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const food = await fetchFood(query);
  return NextResponse.json(food);
}
