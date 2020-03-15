let highTemp = parseFloat(document.getElementById("highTemp").textContent);
let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

let windchill =
  high <= 55 && windspeed > 3
    ? (
        35.74 +  0.6215 * high -  35.75 * windspeed ** 0.16 + 0.4275 * high * windspeed ** 0.16
      ).toFixed(0)
    : "N/A";

document.getElementById("windChill").textContent = windchill;