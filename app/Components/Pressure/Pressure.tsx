"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { gauge } from "@/app/utils/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Pressure() {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.main || !forecast?.main?.pressure) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { pressure } = forecast?.main;

  const getPressureDescription = (pressure: number) => {
    if (pressure < 1000) return "Low atmospheric pressure detected! Brace for potential cloudy and rainy weather.";

    if (pressure >= 1000 && pressure < 1015)
      return "Pressure is low today. It might feel light and breezy. Enjoy the fresh air!";

    if (pressure >= 1015 && pressure < 1025)
      return "Normal pressure.You might notice some gentle winds and calm weather";

    if (pressure >= 1025 && pressure < 1040)
      return "Moderate pressure.Expect typical weather conditions.";

    if (pressure >= 1040) return "Very high pressure. You might experience clear skies and sunny weather. Don't forget your sunscreen!";

    return "Unavailable pressure data";
  };


  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-0 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
          {gauge} Pressure
        </h2>
        <p className="pt-4 text-2xl">{pressure} hPa</p>
      </div>

      <p className="text-sm">{getPressureDescription(pressure)}.</p>
    </div>
  );
}

export default Pressure;
