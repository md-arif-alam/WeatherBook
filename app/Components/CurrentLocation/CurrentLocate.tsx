'use-client'
import React, { useEffect } from 'react'


import { useGlobalContextUpdate } from "../../context/globalContext";


function CurrentLocate() {
  const { setActiveCityCoords } = useGlobalContextUpdate();
  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  useEffect(()=>{
    if (navigator.geolocation) {
        //If user allow location service then will fetch data & send it to setAciveCityCoords function.
         getPosition()
        .then((position) => {
          setActiveCityCoords([position.coords.latitude, position.coords.longitude]);
        })
        .catch((err) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          setActiveCityCoords(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
          console.log(err);
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
            <img src="./WeatherIcons.gif" alt="image" width="50%"  />
          <h3 className='text-white font-3xl font-300'>
            Detecting your location
          </h3>
          <h3 className='text-white mt-4'>
            Your current location wil be displayed on the App <br></br> & used
            for calculating Real time weather.
          </h3>
        </div>
         
  )
}

export default CurrentLocate