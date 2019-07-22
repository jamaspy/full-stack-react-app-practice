var { Pool } = require('pg');

const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/weather.db';
const SSL = process.env.NODE_ENV === 'production';
class Database {
    constructor() {
        this._pool = new Pool({
            connectionString: CONNECTION_STRING,
            ssl: ssl
        });

        this._pool.on('error', (error, client) => {
            console.error("Unexpected error on idle PostgreSQL Client.", error);
            process.exit(-1);
        });
    }

    query() {
        this._pool.connect((error, client, done) => {
            if(error) throw error;
            const params = args.length === 2 ? args[0] : [];
            const callback = args.length === 1 ? args[0] : args[1];

            client.query(query, params, (error, response) => {
                done();
                if (error) {
                    console.log(error.stack);
                    return callback({error: 'Databsae error.' }, null);
                }
                callback({}, response.rows);
            });
        });
    }

    end(){
        this._pool.end();
    }
}

module.exports = new Database();