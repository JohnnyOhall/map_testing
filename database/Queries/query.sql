SELECT film_locations.lat AS lat, film_locations.lng AS lng, movie_name, icon_url
FROM film_locations
JOIN movies ON movies.id = movie_id
JOIN icons ON icons.id = icon_id;