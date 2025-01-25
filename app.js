// get current temp from api and update current temp displayed
function updateCurrentTemp(response) {
  let currentTemp = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityUpdate = document.querySelector("#update-city-name");
  cityUpdate.innerHTML = response.data.city;
  currentTemp.innerHTML = Math.round(temperature);
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
