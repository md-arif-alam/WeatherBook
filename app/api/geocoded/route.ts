import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import apiKeys from "../apiKeys";

export async function GET(req: NextRequest) {
  try {
    // const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const searchParams = req.nextUrl.searchParams;

    const city = searchParams.get("search");
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKeys.key}`;

    const res = await axios.get(url);

    return NextResponse.json(res.data);


      // const res = await fetch(url);
    // const cityData = await res.json();

    // return NextResponse.json(cityData);
  } catch (error) {
    console.log("Error fetching geocoded data");
    return new Response("Error fetching geocoded data", { status: 500 });
  }
}
