const apikey = "87500beda919d1a7d1fb32ad4b0b4549";
//87500beda919d1a7d1fb32ad4b0b4549";
const apiurl= " https://api.openweathermap.org/data/2.5/weather?q=";

//https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox =document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(city){
  const response = await fetch(apiurl + city + `&units=metric&appid=${apikey}`);
  var data =await response.json();
  // console.log(data);
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ "°C";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed +
  "Km/h";

  if(data.weather[0].main === "Clouds"){
    weathericon.src ="images/clouds.png"
  }

  else if(data.weather[0].main === "Clear"){
    weathericon.src ="images/clear.png"
  }
  else if(data.weather[0].main === "Rain"){
    weathericon.src ="images/rain.png"
  }
  else if(data.weather[0].main === "drizzle"){
    weathericon.src ="images/drizzle.png"
  }
  else if(data.weather[0].main === "Mist"){
    weathericon.src ="images/mist.png"
  }
    document.querySelector('.weather').style.display = "block";
} 

  


searchbtn.addEventListener("click", ()=>{
  checkweather(searchBox.value);
})
