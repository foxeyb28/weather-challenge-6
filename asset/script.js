var searchResult = document.querySelector("#weather");
var searchBtn = document.querySelector("#searchBtn");
var inputCity = document.querySelector("#City");
var currentWeather = document.querySelector("#currentWeather");
var forecast = document.querySelector("#forecast");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
//document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".dropdown-trigger");
//   var instances = M.Dropdown.init(elems, {});
//   localStorage.setItem("elems", instances);
// });

var testData;
var apiKey = "de601ddd2d309aebbd9d11f32fbaa2bd";
var userInput;
var weatherApiKey = {
  method: "GET",
  headers: {
    "OpenWeatherAPI-Key": "de601ddd2d309aebbd9d11f32fbaa2bd",
    "OpenWeatherAPI-Host": "OpenWeathermap.org",
  },
};
function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var h1 = document.createElement("h1");
      h1.textContent = data.name;
      currentWeather.append(h1);
      var temp = document.createElement("p");
      temp.textContent = data.main.temp;
      currentWeather.append(temp);
    });
}

function getForecast(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
          var h2 = document.createElement("h2")
          h2.textContent = data.city.name
       forecast.append(h2)
       var wind = document.createElement("p")
       wind.textContent = data.list[0].wind.speed
       forecast.append(wind)
    });
}
function getAllWeather(city) {
  getWeather(city);
  getForecast(city);
}

searchBtn.addEventListener("click", function () {
  var userSearch = inputCity.value;
  console.log(userSearch);
  //getWeather(userSearch);
  getAllWeather(userSearch);
});
// add a forloop to loop thru data.list array to grab 1 index per day (data.list [0].dt, data.list [0].dt_txt)
// use day.js setup start date and end date for if statement 
// if statement should check the forecast array to run as long as its between start/end date 