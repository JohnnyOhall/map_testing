const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'map_test'
});

const getDatabase = () => {
  let queryString = `
  SELECT film_locations.lat AS lat, film_locations.lng AS lng, movie_name, icon_url
  FROM film_locations
  JOIN movies ON movies.id = movie_id
  JOIN icons ON icons.id = icon_id;
  `
  return pool
    .query(queryString)
    .then(res => res.rows)
}

exports.getDatabase = getDatabase;