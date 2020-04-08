const forecastiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bf83dc2f9a9872c97095e545db7c21ec&units=imperial";

const daysoftheweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
fetch(forecastiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const days = document.getElementsByClassName('label-day');
    const fivedayforecast = jsObject.list.filter(x =>
      x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);


    for (let i = 0; i < fivedayforecast.length; i++) {
      document.getElementById(`forecast${i + 1}`).textContent = fivedayforecast[i].main.temp;
      const img = `https://openweathermap.org/img/w/${fivedayforecast[i].weather[0].icon}.png`
      document.getElementById(`img${i + 1}`).setAttribute('src', img);
      const datetoday = new Date(fivedayforecast[i].dt_txt);
      const day = daysoftheweek[datetoday.getDay()];
      days[i].textContent = day;
    }
  });
