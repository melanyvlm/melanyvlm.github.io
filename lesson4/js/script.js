// function toggleMenu() {
// document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

// }

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

let thisDocument  = new Date (document.lastModified) ;
document.getElementById("showDateWeather").innerHTML = thisDocument;

