"use client";
import React, { useEffect, useState } from "react";
import { useglobalContext } from "@/app/context/globalContext";
import {
  clearSky,
  cloudy,
  drizzleIcon,
  navigation,
  rain,
  snow,
} from "@/app/utils/Icons";
import { kelvinToCelsius } from "@/app/utils/misc";
import moment from "moment";

function Temperature() {
  const { forecast } = useglobalContext();

  const { main, timezone, name, weather } = forecast;

  if (!forecast || !weather) {
    return <div>Loading...</div>;
  }

  const temp = kelvinToCelsius(main?.temp);
  const minTemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);


const applyBackgroundColor = (value:number) => {
  if (value < 10) {
      return 'shadow-xl shadow-blue-50';
  } else if (value < 15) {
      return 'shadow-xl shadow-blue-200';
  } else if (value < 20) {
      return 'shadow-xl shadow-yellow-400';
  } else if (value < 25) {
      return 'shadow-xl shadow-yellow-600';
  } else if (value < 30) {
      return 'shadow-xl shadow-yellow-900';
  } else if (value < 35) {
      return 'shadow-xl shadow-red-300';
  } else if (value < 40) {
      return 'shadow-xl shadow-red-900';
  } else {
      return 'shadow-xl shadow-red-1200';
  }
}
const applyTextColor = (value:number) => {
  if (value < 10) {
      return 'text-blue-50';
  } else if (value < 15) {
      return 'text-blue-200';
  } else if (value < 20) {
      return 'text-yellow-400';
  } else if (value < 25) {
      return 'text-yellow-600';
  } else if (value < 30) {
      return 'text-yellow-800';
  } else if (value < 35) {
      return 'text-red-300';
  } else if (value < 40) {
      return 'text-red-900';
  } else {
      return 'text-red-1200';
  }
}


  // State
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");


  // weatherMain give the condition of current weather 
  const { main: weatherMain, description } = weather[0];
// getting icons based on the weather condition 
  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };

  // Live time update
  useEffect(() => {
    // upadte time every second
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
  
         // custom format: 24 hour format
      // const formatedTime = localMoment.format("HH:mm:ss");
      
      // Format the time in 12-hour format with AM/PM
      const formatedTime = localMoment.format("h:mm:ss A");
      // day of the week
      const day = localMoment.format("dddd");

      setLocalTime(formatedTime);
      setCurrentDay(day);
      // applyBackgroundColor(maxTemp);
    }, 1000);

    // clear interval
    return () => clearInterval(interval);
  }, [timezone]);



  

  return (
    <div
      className={`pt-6 pb-5 px-4 border rounded-lg flex flex-col 
        justify-between dark:bg-dark-grey ${applyBackgroundColor(maxTemp)}`}
    >
      <p className="flex justify-between items-center">
        <span className="font-medium text-lg">{currentDay}</span>
        <span className="font-large">{localTime}</span>
      </p>
      <p className="pt-2 font-bold flex gap-1">
        <span>{name}</span>
        <span>{navigation}</span>
      </p>
      <p className={`py-10 text-9xl font-bold self-center ${applyTextColor(maxTemp)}`}>{temp}°</p>

      <div>
        <div>
          <span>{getIcon()}</span>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p className="flex items-center gap-2">
          <span>Low: 
            <span className="text-blue-400">{minTemp}°</span>
          </span>
          <span>High:
           <span  className="text-red-700">{maxTemp}°</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Temperature;
