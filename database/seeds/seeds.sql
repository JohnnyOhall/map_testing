INSERT INTO movies (movie_name, year_filmed)
VALUES
  ('Harry Potter and the Philosopher''s Stone', 2001),
  ('James Bond: Skyfall', 2012),
  ('Sherlock', 2010),
  ('Spider-Man: Far From Home', 2019),
  ('Hot Fuzz', 2007)
;

INSERT INTO icons (icon_url)
VALUES
  ('https://static.thenounproject.com/png/7729-200.png'),
  ('https://w7.pngwing.com/pngs/11/611/png-transparent-daniel-craig-james-bond-film-series-skyfall-eve-moneypenny-james-bond-necktie-business-film.png'),
  ('https://static.thenounproject.com/png/221829-200.png'),
  ('https://cdn.iconscout.com/icon/free/png-256/spiderman-1502925-1273046.png'),
  ('https://styles.redditmedia.com/t5_2uxt7/styles/communityIcon_jj4u0jyi3pv51.jpg?width=256&s=c5c0f7747dd04f845dfcbddf1ad9ca2fb5e1b7fe')
;

INSERT INTO film_locations (city, lat, lng, movie_id, icon_id)
VALUES
  ('London', 51.531182291265445, -0.12463054402555988, 1, 1),
  ('London', 51.48734741698893, -0.12450705936751787, 2, 2),
  ('London', 51.52632993966054, -0.13681762586882337, 3, 3),
  ('London', 51.50559661863324, -0.07532431519107943, 4, 4),
  ('London', 51.593977341765914, -0.24068654402381143, 5, 5)
;