// const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bf83dc2f9a9872c97095e545db7c21ec&units=imperial";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('highTemp').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('hum').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed.toFixed(0);



    
    // for (let i=0; i < 5; i++) {
    //   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    //   const desc = jsObject.weather[0].description;  // note how we reference the weather array
    //   document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    //   document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    //   document.getElementById('icon').setAttribute('alt', desc); 
    // }
  });