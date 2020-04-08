

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
       let contain2 = document.createElement('div');
       let contain = document.createElement('div');
     
       let titles = document.createElement('h3');  
       let subtitle = document.createElement('h3');    
       let p1 = document.createElement('p');    
       let p2 = document.createElement('p');    
       let p3 = document.createElement('p');    
       let p4 = document.createElement('p');   
       
     
       titles.textContent =  riverguides[i].name + " " + riverguides[i].lastname;;
       let image = document.createElement('img');
       contain.setAttribute('class' , 'guide-card');
       p1.textContent =  'certification level : ' + riverguides[i].yearFounded;
       p2.textContent =  'years of experience: ' + riverguides[i].currentPopulation;
       p3.textContent =  'email address : ' + riverguides[i].averageRainfall;
       p4.textContent =  ' biography : ' + riverguides[i].averageRainfall;
       image.setAttribute('src', riverguides[i].image);
       image.setAttribute('alt', riverguides[i].name)

   card.appendChild(contain);
  //  card.appendChild(contain2);
     contain.appendChild(titles);
     contain.appendChild(subtitle);
      contain.appendChild(p1);
      contain.appendChild(p2);
      contain.appendChild(p3);
      contain.appendChild(p4);
        card.appendChild(image);

        document.querySelector('div.guides').appendChild(card); 
  
      }
    // temporary checking for valid response and data parsing
  });
