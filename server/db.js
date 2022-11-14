const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const pkg = require('pg')
const { Pool } = pkg

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

function findMovies(title) {
  return pool.query(`select * from movie_title where title = '${title}'`)
  .then((data) => {
    return data.rows
  })
}

module.exports = findMovies;
