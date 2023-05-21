ALTER TABLE `db`.`api_keys` 
CHANGE COLUMN `id` `id` VARCHAR(255) NOT NULL ;

ALTER TABLE `db`.`genres` 
CHANGE COLUMN `id` `id` VARCHAR(255) NOT NULL ;

ALTER TABLE `db`.`directors` 
CHANGE COLUMN `id` `id` VARCHAR(255) NOT NULL ;

ALTER TABLE `db`.`stars` 
CHANGE COLUMN `id` `id` VARCHAR(255) NOT NULL ;

ALTER TABLE `db`.`movies` 
CHANGE COLUMN `id` `id` VARCHAR(255) NOT NULL ;

ALTER TABLE `db`.`movies_directors` 
CHANGE COLUMN `movies_id` `movies_id` VARCHAR(255) NOT NULL ,
CHANGE COLUMN `directors_id` `directors_id` VARCHAR(255) NOT NULL ;

ALTER TABLE `db`.`movies_genres` 
CHANGE COLUMN `movies_id` `movies_id` VARCHAR(255) NOT NULL ,
CHANGE COLUMN `genres_id` `genres_id` VARCHAR(255) NOT NULL ;

ALTER TABLE `db`.`movies_stars` 
CHANGE COLUMN `movies_id` `movies_id` VARCHAR(255) NOT NULL ,
CHANGE COLUMN `stars_id` `stars_id` VARCHAR(255) NOT NULL ;

ALTER TABLE movies_genres
ADD CONSTRAINT fk_movies_genres_movie
FOREIGN KEY (movies_id)
REFERENCES movies(id)
ON DELETE CASCADE;

ALTER TABLE movies_stars
ADD CONSTRAINT fk_movies_stars_movie
FOREIGN KEY (movies_id)
REFERENCES movies(id)
ON DELETE CASCADE;

ALTER TABLE movies_directors
ADD CONSTRAINT fk_movies_directors_movie
FOREIGN KEY (movies_id)
REFERENCES movies(id)
ON DELETE CASCADE;