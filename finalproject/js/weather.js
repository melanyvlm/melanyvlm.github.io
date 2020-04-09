

const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('currently').textContent = jsObject.weather[0].main;
      document.getElementById('highTemp').textContent = jsObject.main.temp_max.toFixed(0);
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      document.getElementById('windSpeed').textContent = jsObject.wind.speed.toFixed(0);
  
      const highTemp = jsObject.main.temp;
      const windSpeed = jsObject.wind.speed;
      const windChill = 35.74 + 0.6215 * highTemp 
      - 35.75 * Math.pow(windSpeed, 0.16) 
      + 0.4275 * highTemp * Math.pow(windSpeed, 0.16);
  
      if (highTemp <= 50 && windSpeed > 3.0)
      {
          document.getElementById("windChill").innerHTML = windChill.toFixed(0) + "&deg; F";
      }
      else {
          document.getElementById("windChill").textContent = "N/A"
      }
    });
  