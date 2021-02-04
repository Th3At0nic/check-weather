// let cityInput = document.getElementById("city-input").value;
// let appid = "c8a02f0db1884b41d5e8fad78d640254";
// let url = "http://api.openweathermap.org/data/2.5/weather?q=";

// // document.getElementById("search-btn").addEventListener("click", function () {
// //     checkWeather();
// // });

// function checkWeather() {
//     fetch(`${url}${cityInput}&APPID=${appid}`)
//         .then(response => response.json())
//         .then(data => {

//             // const cityName = data.name;
//             // console.log(cityName);

//             document.getElementById("city-name").innerText = data.name;
//             document.getElementById("temperature").innerText = (data.main.temp - 273.15).toFixed(2);

//             document.getElementById("aerosol").innerText = data.weather[0].main;
//             console.log(data);

//         });
// }



// document.getElementById('search-btn').addEventListener('click', function () {

//     getWeatherInfo();
// });

function getWeatherInfo() {
    const input = document.getElementById('city-input').value;
    const apiKey = "cd94683e7244427528aeb03457b29665";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`)

        .then(res => res.json())
        .then(data => {

            const cityName = data.name;
            const temp = data.main.temp - 273;
            const tempCelcius = temp.toFixed(2);
            condition = data.weather[0].main;
            const weatherIcon = data.weather[0].icon;
            const iconUrl = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

            document.getElementById('city-name').innerText = cityName;
            document.getElementById('temperature').innerText = tempCelcius;
            document.getElementById('aerosol').innerText = condition;
            document.getElementById("weather-icon").src = iconUrl;


        });
}