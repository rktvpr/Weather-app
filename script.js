const cityEl = document.getElementById("location");
const tempEl = document.getElementById.Id("temperature")
const humidityEl = document.getElementById.Id("humidity")
const precipitationEl = document.getElementById.Id("pop")
const cloudsEl = document.getElementById.Id("clouds")





const APIkey = 'b9b6473a9278d7b2a79b1934480d6bb0';

function getWeather(cityName) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    axios.get(queryURL)
        .then(function (response) {
            const currentDate = new Date(response.data.dt * 1000);
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            cityEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
            tempEl.innerHTML = "Current Temperature: " + k2f(response.data.main.temp) + " &#176F";
        })
}