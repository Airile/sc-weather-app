// get current temp from api and update current temp displayed
function updateCurrentTemp(response) {
  let currentTemp = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  // takes the submitted city name and makes it the same as the api response
  let cityUpdate = document.querySelector("#update-city-name");
  let desctiptionUpdate = document.querySelector("#description");
  let humidityUpdate = document.querySelector("#humidity");
  let windSpeedUpdate = document.querySelector("#wind-speed");
  let timeUpdate = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");

  cityUpdate.innerHTML = response.data.city;
  // updates the big current temperature displayed
  currentTemp.innerHTML = Math.round(temperature);

  // update weather description
  desctiptionUpdate.innerHTML = response.data.condition.description;

  // update humidity
  humidityUpdate.innerHTML = `${response.data.temperature.humidity}%`;
  // update windspeed
  windSpeedUpdate.innerHTML = `${response.data.wind.speed} km/h`;
  // update day and time
  timeUpdate.innerHTML = formatDate(date);
  // creating icon inject from api
  // empty div in html gets this image pushed into it
  icon.innerHTML = `<img
                src="${response.data.condition.icon_url}"
                alt=""
                class="weather-icon"
              />`;
}

// format date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}

// connect API to the search function
function searchCity(city) {
  // make api call and update interface
  let apiKey = "o9431d13cf2b77b978e0f82t33a11a1f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  // get temperature
  axios.get(apiUrl).then(updateCurrentTemp);
}

// search bar functionality
function handleSearch(event) {
  event.preventDefault();
  // updates h1 to the submitted city name
  let searchInput = document.querySelector("#search-form-input");
  // calls the api function, inserts the
  // search input's value to the function
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);

// default searched city on page reload/open
searchCity("Tallinn");
