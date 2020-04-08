const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}



let highTemp = parseFloat(document.getElementById("highTemp").textContent);
let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);


// Windchill
let windChill =   highTemp <= 50 && windSpeed > 3
    ? (
        35.74 +
        0.6215 * highTemp -
        (35.75 * Math.pow(windSpeed, 0.16))+
        0.4275 * highTemp * Math.pow(windSpeed, 0.16) 
      ).toFixed(0)
    : "N/A";

document.getElementById("windChill").textContent = windChill;

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('highTemp').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('hum').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed.toFixed(0);

  });

  const apihavenURL = "https://api.openweathermap.org/data/2.5/weather?id=5593814&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";


fetch(apihavenURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('currently-haven').textContent = jsObject.weather[0].main;
    document.getElementById('highTemp-haven').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('hum-haven').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed-haven').textContent = jsObject.wind.speed.toFixed(0);

  });

  const apispringURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";


  fetch(apispringURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      
      document.getElementById('currently-spring').textContent = jsObject.weather[0].main;
      document.getElementById('highTemp-spring').textContent = jsObject.main.temp_max.toFixed(0);
      document.getElementById('hum-spring').textContent = jsObject.main.humidity;
      document.getElementById('windSpeed-spring').textContent = jsObject.wind.speed.toFixed(0);
  
    });
