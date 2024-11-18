const apikey = "YOUR_API_KEY";

const main = document.getElementById("main");
const form = document.getElementById("weather-form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);
    if(respData.cod === "404"){
        showError("City not found.")
    }
    else{
        addWeatherToPage(respData);
    }
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h3>${data.name}</h3>
        <h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
            ${temp}°C
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        </h2>
        <p>${data.weather[0].main}</p>
        <div class="more-info">
            <p>Humidity : <span>${humidity}%</span></p>
            <p>Wind speed : <span>${+Math.trunc(windSpeed * 3.16)}km/h</span></p>
        </div>
    `;

    main.innerHTML = "";

    main.appendChild(weather);
}

function showError(message){
    main.innerHTML = `<h1>${message}</h1>`
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});