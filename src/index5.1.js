let now = new Date();
let dateDay = document.querySelector(".date-day");

let monthes = [
	"01",
	"02",
	"03",
	"04",
	"05",
	"06",
	"07",
	"08",
	"09",
	"10",
	"11",
	"12",
];
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

let date = now.getDate();
if (date < 10) {
	date = `0${date}`;
}
let month = monthes[now.getMonth()];
let year = now.getFullYear();
let day = days[now.getDay()];

dateDay.innerHTML = `${date}/${month}/${year}, ${day}`;

let hours = now.getHours();
if (hours < 10) {
	hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
	minutes = `0${minutes}`;
}

let timeActual = document.querySelector(".time-actual");
timeActual.innerHTML = `Time: ${hours}:${minutes}`;

// Week5 Homework challenge1
function changeCity(event) {
	event.preventDefault();
	let cityOutput = document.querySelector("#city-output");
	let h1 = document.querySelector("h1");
	h1.innerHTML =
		`${cityOutput.value}`.charAt(0).toUpperCase() +
		`${cityOutput.value}`.slice(1);

	let apiKey = "a2e58143d5353df7726302c2856b0fb6";
	let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
	let units = "metric";
	let apiUrl = `${apiEndPoint}?q=${cityOutput.value}&appid=${apiKey}&units=${units}`;

	axios.get(`${apiUrl}`).then(showTemperature);
}

let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("submit", changeCity);

function showTemperature(response) {
	console.log(response);
	let temperature = document.querySelector("#temperature");
	temperature.innerHTML = Math.round(response.data.main.temp);
	let windToday = document.querySelector("#wind-today");
	windToday.innerHTML = response.data.wind.speed.toFixed(1);
}

// week5 bonus challenge homework

function retrievePosition(position) {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let apiKey = "a2e58143d5353df7726302c2856b0fb6";
	let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
	let units = "metric";
	let apiUrl = `${apiEndPoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
	console.log(apiUrl);
	axios.get(`${apiUrl}`).then(showWeather);
}

function showWeather(response) {
	let curCity = response.data.name;
	let city = document.querySelector("#city2");
	city.innerHTML = `${curCity}`;

	let curTemperature = Math.round(response.data.main.temp);
	let temperature = document.querySelector("#temperature");
	temperature.innerHTML = `${curTemperature}`;
}

function getPosition(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(retrievePosition);
}
let currentWeather = document.querySelector("#current-weather-button");
currentWeather.addEventListener("click", getPosition);

//start page city
function startPageWeather(response) {
	let startPageTemperature = Math.round(response.data.main.temp);
	let temperatureKyiv = document.querySelector("#temperature");
	temperatureKyiv.innerHTML = `${startPageTemperature}`;
	let windTodayKyiv = document.querySelector("#wind-today");
	windTodayKyiv.innerHTML = response.data.wind.speed.toFixed(1);
}

let apiKey = "a2e58143d5353df7726302c2856b0fb6";
let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
let units = "metric";
let city = "Kyiv";
let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(`${apiUrl}`).then(startPageWeather);

//рабочий код
// function changeSystem(event) {
// 	event.preventDefault();
// 	let fClick = document.querySelector("#temperature");
// 	fClick.innerHTML = "68";
// }
// let systemDegree = document.querySelector("#farenheit-link");
// systemDegree.addEventListener("click", changeSystem);

// function changeSystemBack(event) {
// 	event.preventDefault();
// 	let cClick = document.querySelector("#temperature");
// 	cClick.innerHTML = "20";
// }
// let systemDegreeBack = document.querySelector("#celsius-link");
// systemDegreeBack.addEventListener("click", changeSystemBack);
