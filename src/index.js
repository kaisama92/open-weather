import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//j Business Logic

function getWeather(city) {
  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&`;
  
  request.addEventListener("loadend", function() {
    try {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        printElements(response, city);
      } else {
        throw Error("Status Error");
        // printError(this, city);
      }
    } catch(error) {
      /* eslint-disable no-console */
      console.error(`Red Alert: There is an error: ${error.message}`);
      /* eslint-enable no-console */
      printError(this, city);
    }
  });

  request.open("GET", url, true);
  request.send();
}

// UI Logic 

function printError(request, city) {
  document.querySelector(`#showResponse`).innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}`;
}

function printElements(apiResponse, city) {
  document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${apiResponse.main.humidity}%.
    The temperature in Kelvins is ${apiResponse.main.temp} degrees.
    The temperature in Fahrenheit is ${((parseFloat(apiResponse.main.temp)-273.15)*(9/5)+32).toFixed(0)}.
    The wind speed in mph is ${apiResponse.wind.speed}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null; 
  getWeather(city);
}

window.addEventListener("load", function () {
  this.document.querySelector('form').addEventListener("submit", handleFormSubmission);
});