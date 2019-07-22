var express = require('express');
var Cities = require('../models/cities');

var router = express.Router();


// Retrieve All Cities From Database
router.get('/', function(request, response){
    Cities.retrieveAll(function (error, cities) {
        if (error)
            return response.json(error);
        return response.json(cities);
    });
});


// Add City To Database
router.post('/', function(request, response){
    let city = request.body.city;

    Cities.insert(city, function(error, result){
        if(error)
            return response.json(error)
        return response.json(result)
    })
});

module.exports = router;