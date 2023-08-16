const latitude = document.querySelector(".lat-details");
const longitude = document.querySelector(".long-details");
const searchb = document.querySelector(".search");
const pehli = document.querySelector(".weather-lat-long-img");
const enteredLat = latitude.value;
const eneteredLong = longitude.value;
const final = document.querySelector(".final-weather");

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";


searchb.addEventListener('click', showWeather(enteredLat,eneteredLong));

async function showWeather(lat,long){
  const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
 pehli.classList.add("deactive");
final.classList.add("active");

console.log('weahter: ' ,data);
}

