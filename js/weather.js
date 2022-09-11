const API_KEY = "2fbe119b7396b823eb3d5f59ddd0dade";

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
        .then(data => {
            // const weather = document.querySelector("#weather div span:nth-child(1)");
            const city = document.querySelector("#weather div span:nth-child(2)");
            const temp = document.querySelector("#weather div span:nth-child(1)");
            const weatherIcon = document.createElement("img");
            const weatherIconCode = data.weather[0].icon;
            // weather.innerText = data.weather[0].main;
            city.innerText = data.name;
            temp.innerText = `${Math.round(data.main.temp)}\u2103`;
            weatherIcon.src = `http://openweathermap.org/img/wn/${weatherIconCode}.png`;
            const addWeather = document.querySelector("#weather");
            addWeather.appendChild(weatherIcon);
        });
}

function geoOK(geo) {
    const lat = geo.coords.latitude;
    const lon = geo.coords.longitude;
    getWeather(lat, lon);
}
function geoError() {
    const lat = 37.5666805;
    const lon = 126.9784147;
    getWeather(lat, lon);
}


navigator.geolocation.getCurrentPosition(geoOK, geoError);