let cityName = document.getElementById("city-input").value;
let appid = "c8a02f0db1884b41d5e8fad78d640254";
let url = "http://api.openweathermap.org/data/2.5/weather?q=";

document.getElementById("search-btn").addEventListener("click", function () {
    checkWeather();
});

function checkWeather() {
    fetch(`${url}${cityName}&APPID=${appid}`)
        .then(response => response.json())
        .then(data => {

            document.getElementById("city-name").innerText = cityName;
            document.getElementById("temperature").innerText = (data.main.temp - 273.15).toFixed(2);

            document.getElementById("aerosol").innerText = data.weather[0].main;
            console.log(data);

        });
}