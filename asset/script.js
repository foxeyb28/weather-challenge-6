var searchResult = document.querySelector("#weather");
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
localStorage.setItem("elems", instances);
localStorage.setItem("elems", instances);
renderLastRegistered();
