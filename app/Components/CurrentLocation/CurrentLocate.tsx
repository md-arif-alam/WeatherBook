'use-client'
import React, { useEffect } from 'react'


import { useglobalContextUpdate } from "../../context/globalContext";
import Image from 'next/image'
import WeatherIcons from '../../../public/WeatherIcons.gif'


function CurrentLocate() {
  const { setActiveCityCoords } = useglobalContextUpdate();
  const getPosition = (): Promise<GeolocationPosition>  => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  useEffect(()=>{
    if (navigator.geolocation) {
        //If user allow location service then will fetch data & send it to setAciveCityCoords function.
         getPosition()
        .then((position: GeolocationPosition) => {
          setActiveCityCoords([position.coords.latitude, position.coords.longitude]);
        })
        .catch((error: GeolocationPositionError) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          setActiveCityCoords(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
          console.error("Error getting geolocation:", error);
          // Handle error gracefully, maybe show a message to the user
        });
    } else {
      alert("Geolocation not available");
    }
  
  },[])

  // const timerID = setInterval(
  //     () => setActiveCityCoords([]),
  //     600000
  //   );

  //   useEffect(()=>{
  //     clearInterval(timerID);
  //   })

 
  return (
     <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
   
 
          <h1 className='text-white font-3xl font-300 text-center mt-2'>
            Detecting your location
          </h1>
          <Image
            className='flex text-center'
             src={WeatherIcons}
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Loading Picture"
       />
          <span className='text-blue-500 mt-4'>
            Your current location wil be displayed on the App <br></br> & used
            for calculating Real time weather.
          </span>
        </div>
         
  )
}

export default CurrentLocate