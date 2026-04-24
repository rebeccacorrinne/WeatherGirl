function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector(".city-name");

    let temperature = response.data.temperature.current;
    let city = response.data.city;

cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML= Math.round(temperature);    
     
}

function searchCity(city) {
let apiKey= "5aebaf322a84ft22eb0f046oe39fc614"
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
    searchCity(searchInput.value);

}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Las Vegas");

