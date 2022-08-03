API_KEY = "a8e9f3f575b0063b703a720a5a99048b";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const temperature = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      temperature.innerText = data.main.temp;
    });
}

function onGeoError() {
  alert("No weather information available");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
