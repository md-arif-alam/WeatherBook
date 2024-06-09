import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import apiKeys from "../apiKeys";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    // const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    const url = `${apiKeys.base}air_pollution?lat=${lat}&lon=${lon}&appid=${apiKeys.key}`;

    const res = await axios.get(url);

    return NextResponse.json(res.data);

     // const res = await fetch(url);
    // const pollutionData = await res.json();
    // return NextResponse.json(pollutionData);


  } catch (error) {
    console.log("Error in getting pollusion data ", error);
    return new Response("Error fetching pollution data", { status: 500 });
  }
}
