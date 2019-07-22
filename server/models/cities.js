const db = require('../database')


class Cities {
    static retrieveAll (callback) {
        db.query('SELECT city_name from cities', function(error, response) {
            if(error.error)
                return callback(error);
            callback(response);
        });
    }

    static insert (city, callback) {
        db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], function(error, response){
            if(error.error)
                return callback(error);
            callback(response)
        })

    }
}

module.exports = Cities