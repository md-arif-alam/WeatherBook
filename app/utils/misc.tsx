// Here are all the utilities function define below

import moment from "moment";


//here the data from api are in kelvin so converting it to celsius
export const kelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};


//convert timezone number into hour and minutes format 

export const unixToTime = (unix: number, timezone: number) => {
  return moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format("h:mm A");
};

// convert day number into proper name of the day format 

export const unixToDay = (unix: number) => {
  return moment.unix(unix).format("ddd");
};


// changing number population of a city into million(M) or thousand(K) format
export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};

//giving description of air quality index based upon the rating

export const airQulaityIndexText = [
  {
    rating: 10,
    description: "excellent",
  },
  {
    rating: 20,
    description: "good",
  },
  {
    rating: 30,
    description: "satisfactory",
  },
  {
    rating: 40,
    description: "fair",
  },
  {
    rating: 50,
    description: "moderate",
  },
  {
    rating: 60,
    description: "Unhealthy",
  },
  {
    rating: 70,
    description: "Unhealthy for Sensitive Groups",
  },
  {
    rating: 80,
    description: "poor",
  },
  {
    rating: 90,
    description: "Very Unhealthy",
  },
  {
    rating: 100,
    description: "Hazardous",
  },
];