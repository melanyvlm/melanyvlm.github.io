

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  
    for (let i = 0; i < towns.length; i++ ) {
  if ( towns[i].name == 'Fish Haven' || towns[i].name == "Preston"
  || towns[i].name == "Soda Springs" 
  ) {
       let card = document.createElement('article');
      //  let contain2 = document.createElement('div');
       let contain = document.createElement('div');
     
       let titles = document.createElement('h3');  
       let subtitle = document.createElement('h4');    
       let p1 = document.createElement('p');    
       let p2 = document.createElement('p');    
       let p3 = document.createElement('p');    
       
       
      //  contain2.setAttribute('class' , 'title');
       titles.textContent =  towns[i].name;
       subtitle.textContent =  towns[i].motto;
       let image = document.createElement('img');
       contain.setAttribute('class' , 'container');
       p1.textContent =  'Year Founded : ' + towns[i].yearFounded;
       p2.textContent =  'Population : ' + towns[i].currentPopulation;
       p3.textContent =  'Population : ' + towns[i].averageRainfall;
       image.setAttribute('src', 'cities-img/'+ towns[i].photo);
       image.setAttribute('alt', towns[i].name)

   card.appendChild(contain);
  //  card.appendChild(contain2);
     contain.appendChild(titles);
     contain.appendChild(subtitle);
      contain.appendChild(p1);
      contain.appendChild(p2);
      contain.appendChild(p3);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card); 
  }
      }
    // temporary checking for valid response and data parsing
  });

  const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  fetch(eventsURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      console.table(jsonObject); 
      for (let i = 0; i < towns.length; i++) {
          if (towns[i].name == "Fish Haven") {
              let event = document.createElement('section');
              for (let e = 0; e < towns[i].events.length; e++) {
                  let p = document.createElement('p');
                  p.textContent = towns[i].events[e];
                  event.appendChild(p);
              }
              document.querySelector('div.list').appendChild(event);
          }
      }
  });

  const eventsprestonURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  fetch(eventsprestonURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      console.table(jsonObject); 
      for (let i = 0; i < towns.length; i++) {
          if (towns[i].name == "Preston") {
              let event = document.createElement('section');
              for (let e = 0; e < towns[i].events.length; e++) {
                  let p = document.createElement('p');
                  p.textContent = towns[i].events[e];
                  event.appendChild(p);
              }
              document.querySelector('div.listpreston').appendChild(event);
          }
      }
  });

  
  const eventsspringURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  fetch(eventsspringURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      console.table(jsonObject); 
      for (let i = 0; i < towns.length; i++) {
          if (towns[i].name == "Preston") {
              let event = document.createElement('section');
              for (let e = 0; e < towns[i].events.length; e++) {
                  let p = document.createElement('p');
                  p.textContent = towns[i].events[e];
                  event.appendChild(p);
              }
              document.querySelector('div.listspring').appendChild(event);
          }
      }
  });
