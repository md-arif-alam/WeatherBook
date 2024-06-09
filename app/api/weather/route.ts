import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import apiKeys from "../apiKeys"
export async function GET(req: NextRequest) {
  try {
     // const apiKey = process.env.OPENWEATHERMAP_API_KEY;  // getting api key from .env file

    const searchParams = req.nextUrl.searchParams;

    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    const url = `${apiKeys.base}weather?lat=${lat}&lon=${lon}&appid=${apiKeys.key}`;

    const res = await axios.get(url);

    return NextResponse.json(res.data);

    // const res = await fetch(url);
// const weatherData = await res.json();

// return NextResponse.json(weatherData);
  } catch (error) {
    console.log("Error fetching forecast data");
    return new Response("Error fetching forecast data", { status: 500 });
  }
}
