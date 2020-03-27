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
