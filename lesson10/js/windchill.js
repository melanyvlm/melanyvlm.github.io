let highTemp = parseFloat(document.getElementById("highTemp").textContent);
let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

let windChill =   highTemp <= 50 && windSpeed > 3
    ? (
        35.74 +
        0.6215 * highTemp -
        (35.75 * Math.pow(windSpeed, 0.16))+
        0.4275 * highTemp * Math.pow(windSpeed, 0.16) 
      ).toFixed(0)
    : "N/A";

document.getElementById("windChill").textContent = windChill;