// function toggleMenu() {
// document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

// }

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

let thisDocument  = new Date (document.lastModified) ;
document.getElementById("dateWeather").innerHTML = thisDocument;

const d = new Date();

const banner = document.getElementById("banner");

if (d.getDay() === 5) {
  banner.classList.add("show");
} else {
  banner.classList.add("hide");
}
