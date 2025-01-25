// search bar functionality
function handleSearch(event) {
  event.preventDefault();
  // updates h1 to the submitted city name
  let searchInput = document.querySelector("#search-form-input");
  let cityUpdate = document.querySelector("#update-city-name");
  cityUpdate.innerHTML = searchInput.value;
  // API integration
  let apiKey = "o9431d13cf2b77b978e0f82t33a11a1f";
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);
