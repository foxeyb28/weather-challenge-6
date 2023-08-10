var searchResult = document.querySelector("#weather");
var searchBtn = document.querySelector("#searchBtn");
var inputCity = document.querySelector("#City");
var currentWeather = document.querySelector("#currentWeather")
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {});
  localStorage.setItem("elems", instances);
});

function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (!email || !password) {
    return;
  }
}
var testData;
var apiKey = 'de601ddd2d309aebbd9d11f32fbaa2bd';
var userInput;
var weatherApiKey = {
  method: 'GET',
  headers: {
    'OpenWeatherAPI-Key': 'de601ddd2d309aebbd9d11f32fbaa2bd',
    'OpenWeatherAPI-Host': 'OpenWeathermap.org'
  }
};
function getWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
  .then((response)=>{
    console.log(response)
    return response.json()
  }) .then((data)=>{
    console.log(data)
    var h1 = document.createElement("h1")
    h1.textContent = data.name
currentWeather.append(h1)
var temp = document.createElement("p")
temp.textContent = data.main.temp
currentWeather.append(temp)
  })
}
//localStorage.setItem("elems", instances);
//localStorage.setItem("elems", instances);
renderLastRegistered();
searchBtn.addEventListener("click", function(){
  var userSearch = inputCity.value 
  console.log(userSearch)
  getWeather(userSearch)
})