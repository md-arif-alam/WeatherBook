"use client";
import AirPollution from "./Components/AirPollution/AirPollution";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import FeelsLike from "./Components/FeelsLike/FeelsLike";
import Humidity from "./Components/Humidity/Humidity";
import Mapbox from "./Components/Mapbox/Mapbox";
import Navbar from "./Components/Navbar";
import Population from "./Components/Population/Population";
import Pressure from "./Components/Pressure/Pressure";
import Sunset from "./Components/Sunset/Sunset";
import Temperature from "./Components/Temperature/Temperature";
import UvIndex from "./Components/UvIndex/UvIndex";
import Visibility from "./Components/Visibility/Visibility";
import Wind from "./Components/Wind/Wind";
import defaultStates from "./utils/defaultStates";
import FiveDayForecast from "./Components/FiveDayForecast/FiveDayForecast";
import { useglobalContextUpdate } from "./context/globalContext";

import { useEffect, useState } from "react";
import CurrentLocate from "./Components/CurrentLocation/CurrentLocate";

// import dynamic from "next/dynamic";

// import { scrollTo } from "scroll-polyfill";

// const DynamicWindow = dynamic(()=>(),{
//   ssr:false,
// })

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// };


export default function Home() {
  const[location,setLocation] = useState(false)


  useEffect(()=>{
    if(navigator.geolocation)setLocation(true)
  },[])
  const { setActiveCityCoords } = useglobalContextUpdate();



  

const getClickedCityCords = (lat: number, lon: number): void => {
  setActiveCityCoords([lat, lon]);
  if (typeof window !== 'undefined'){
   
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
  }
};


 // Check if window object is defined (not SSR)
  // Dynamically import scrollTo function only on the client-side
//   const scrollToImport = dynamic(
//     () => import('./context/scroll'),
//     { ssr: false }
//   );
// }





  return (
  <>
      {location ?
       <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4">
            <Mapbox />
            <div className="states flex flex-col gap-3 flex-1">
              <h2 className="flex items-center gap-2 font-medium">
                Top Large Cities
              </h2>
              <div className="flex flex-col gap-4">
                {defaultStates.map((state, index) => {
                  return (
                    <div
                      key={index}
                      className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"
                      onClick={() => {
                        getClickedCityCords(state.lat, state.lon);
                      }}
                    > 
                      <p className="px-6 py-4">{state.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 flex justify-center pb-8">
        <p className="footer-text text-sm flex items-center gap-1">
          Made by :
          <a
            href="https://github.com/md-arif-alam"
            target="_blank"
            className=" text-blue-300 font-bold"
          >
            Md Arif Alam
          </a>
        </p>
      </footer>
    </main>
    :
    <main className='className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto'>    
       <CurrentLocate/>
    </main>

   }
</>

)
  
}
