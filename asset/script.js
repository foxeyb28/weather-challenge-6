var searchResult = document.querySelector("#weather");
var searchBtn = document.querySelector("#searchBtn");
var inputCity = document.querySelector("#City");
var currentWeather = document.querySelector("#currentWeather");
var forecast = document.querySelector("#forecast");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, {});
  localStorage.setItem("elems", instances);
});

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
      temp.textContent = "Temp "+data.main.temp;
      currentWeather.append(temp);

      var wind = document.createElement("p");
      wind.textContent = "Wind "+data.wind.speed;
      currentWeather.append(wind);
      
      var humidity = document.createElement("p");
      humidity.textContent = "Humidity "+data.main.humidity;
      currentWeather.append(humidity)
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
      for (let i = 0; i < data.list.length; i++) {
        const element = data.list[i];
        if (element.dt_txt.includes("12:00:00")) {
          console.log(element);
          var card = document.createElement("div")
          card.setAttribute("class", "card")
          var h2 = document.createElement("h2")
          h2.textContent = element.dt_txt.split(" ")[0]
       card.append(h2)
       var wind = document.createElement("p")
       wind.textContent = "Wind "+element.wind.speed
       card.append(wind)
       var temp = document.createElement("p")
       temp.textContent = "Temp "+element.main.temp
       card.append(temp)
       var humidity = document.createElement("p")
       humidity.textContent = "Humidity "+element.main.humidity
       card.append(humidity)
          forecast.append(card)
        }
      }
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