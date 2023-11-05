function displaySearch(response) {
  let displayTemperature = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let displayCity = document.querySelector("#current-city");
  displayCity.innerHTML = response.data.city;
  displayTemperature.innerHTML = `${temperature}°C`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "01368d87aa2e938dd832e67ee5ccffd0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displaySearch);
}

let currentInfo = new Date();

let h3 = document.querySelector("h3");

let date = currentInfo.getDate();
let hours = currentInfo.getHours();
let minutes = currentInfo.getMinutes();
let year = currentInfo.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentInfo.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[currentInfo.getMonth()];

h3.innerHTML = `${day} ${date} ${month}  ${hours}:${minutes}`;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
