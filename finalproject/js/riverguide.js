

const requestURL = 'https://melanyvlm.github.io/finalproject/riverguides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const riverguides = jsonObject['riverguides'];
    console.table(jsonObject);  
    for (let i = 0; i < riverguides.length; i++ ) {
       let card = document.createElement('article');
      //  let contain2 = document.createElement('div');
       let contain = document.createElement('div');
     
       let titles = document.createElement('h3');  
       let subtitle = document.createElement('h4');    
       let p1 = document.createElement('p');    
       let p2 = document.createElement('p');    
       let p3 = document.createElement('p');    
       
       
      //  contain2.setAttribute('class' , 'title');
       titles.textContent =  riverguides[i].name;
       subtitle.textContent =  riverguides[i].motto;
       let image = document.createElement('img');
       contain.setAttribute('class' , 'container');
       p1.textContent =  'Year Founded : ' + riverguides[i].yearFounded;
       p2.textContent =  'Population : ' + riverguides[i].currentPopulation;
       p3.textContent =  'Population : ' + riverguides[i].averageRainfall;
       image.setAttribute('src', 'cities-img/'+ riverguides[i].photo);
       image.setAttribute('alt', riverguides[i].name)

   card.appendChild(contain);
  //  card.appendChild(contain2);
     contain.appendChild(titles);
     contain.appendChild(subtitle);
      contain.appendChild(p1);
      contain.appendChild(p2);
      contain.appendChild(p3);
        card.appendChild(image);

        document.querySelector('div.guides').appendChild(card); 
  
      }
    // temporary checking for valid response and data parsing
  });
