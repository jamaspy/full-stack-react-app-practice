const request = require('request-promise');

const API_KEY = 'f48c181814c3befb9177e85c1b8e2644'

class Weather {
    retrieveByCity (city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
            json: true
        }).then(function(res) {
            callback(res);
        }).catch(function (err){
            console.log(err);
            callback({error: "Could not reach OpemWeatherMap API."});
        })    
    }
}

modules.exports = Weather;