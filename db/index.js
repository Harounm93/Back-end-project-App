const { Pool } = require("pg");

// step 1 - create new pool
const pool = new Pool({
  // host: process.env.PGHOST,
  // user: process.env.PGUSER,
  // database: process.env.PGDATABASE,
  // password: process.env.PGPASSWORD,
  // port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false },
});
//module exports
module.exports = {
  query: function (text, params, callback){
    return pool.query(text, params, callback);
  },
};