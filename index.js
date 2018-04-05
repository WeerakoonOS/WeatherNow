let request = require('request');

let apiKey = 'eb59071d486d6c9ef2159f4c067b5fee';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} Celcius in ${weather.name}!`;
    console.log(message);
    //console.log('body:', body);
  }
});