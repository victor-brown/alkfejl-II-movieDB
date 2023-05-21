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