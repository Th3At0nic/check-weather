function checkWeather() {
    let cityInput = document.getElementById("city-input").value;
    let appid = "c8a02f0db1884b41d5e8fad78d640254";
    // let url = "http://api.openweathermap.org/data/2.5/weather?q=";


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${appid}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temperature").innerText = (data.main.temp - 273.15).toFixed(2);

            let weatherIcon = data.weather[0].icon;
            let iconUrl = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            document.getElementById("weather-icon").src = iconUrl;
            document.getElementById("aerosol").innerText = data.weather[0].main;
            // console.log(data);
        });
}