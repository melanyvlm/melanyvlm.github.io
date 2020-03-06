const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');  
        let p1 = document.createElement('p');    
       let image = document.createElement('img');
       let p2 = document.createElement('p');    

       p1.textContent = 'Date of Birth : ' + prophets[i].birthdate;
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; 
        p2.textContent = 'Place of Birth : ' + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);       
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card); 
    }
    // temporary checking for valid response and data parsing
  });

  image.setAttribute('src', prophets[i].imageurl);

//   const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const prophets = jsonObject['prophets'];
//     console.table(jsonObject); // temporary checking for valid response and data parsing
//     for (let i = 0; i < prophets.length; i++) {
//       let card = document.createElement('section');
//       let h2 = document.createElement('h2');
//       let div1 = document.createElement('div');
//       let div2 = document.createElement('div');
//       let image = document.createElement('img');

//       h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
//       div1.textContent = 'Birth date: ' + prophets[i].birthdate;
//       div2.textContent = 'Birth Place: ' + prophets[i].birthplace;
//       image.setAttribute('src', prophets[i].imageurl);
//       image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order)

//       card.appendChild(h2);
//       card.appendChild(div1);
//       card.appendChild(div2);
//       card.appendChild(image);

//       document.querySelector('div.cards').appendChild(card);
//     }
//   });

const prophets = jsonObject['prophets'];
