// import React from "react";
// import apiKeys from "./apiKeys";
// import loader from "./images/WeatherIcons.gif";
// import ReactAnimatedWeather from "react-animated-weather";

// const defaults = {
//   color: "white",
//   size: 112,
//   animate: true,
// };
// class Weather extends React.Component {

//   componentDidMount() {
//     if (navigator.geolocation) {
//       this.getPosition()
//         //If user allow location service then will fetch data & send it to get-weather function.
//         .then((position) => {
//           this.getWeather(position.coords.latitude, position.coords.longitude);
//         })
//         .catch((err) => {
//           //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
//           this.getWeather(28.67, 77.22);
//           alert(
//             "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
//           );
//         });
//     } else {
//       alert("Geolocation not available");
//     }

//     this.timerID = setInterval(
//       () => this.getWeather(this.state.lat, this.state.lon),
//       600000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//   getPosition = (options) => {
//     return new Promise(function (resolve, reject) {
//       navigator.geolocation.getCurrentPosition(resolve, reject, options);
//     });
//   };
//   // getWeather = async (lat, lon) => {
//   //   const api_call = await fetch(
//   //     `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
//   //   );
//   //   const data = await api_call.json();
//   //   this.setState({
//   //     lat: lat,
//   //     lon: lon,
//   //     city: data.name,
//   //     temperatureC: Math.round(data.main.temp),
//   //     temperatureF: Math.round(data.main.temp * 1.8 + 32),
//   //     humidity: data.main.humidity,
//   //     main: data.weather[0].main,
//   //     country: data.sys.country,
//   //   });
//   // };

//   render() {

//       return (
//         <React.Fragment>
//           <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
//           <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
//             Detecting your location
//           </h3>
//           <h3 style={{ color: "white", marginTop: "10px" }}>
//             Your current location wil be displayed on the App <br></br> & used
//             for calculating Real time weather.
//           </h3>
//         </React.Fragment>
//       );

//   }
// }

// export default Weather;
