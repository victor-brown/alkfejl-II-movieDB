import { v4 as uuidv4 } from "uuid";
import connection from "../connection";

export interface Movies {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  certificate: string;
  runtime: string;
  imdbRating: string;
  description: string;
}

export const MoviesModel = {
  create: (
    title: string,
    year: string,
    imageUrl: string,
    certificate: string,
    runtime: string,
    imdbRating: string,
    description: string
  ) => {
    const movies: Movies = {
      id: uuidv4(),
      title,
      year,
      imageUrl,
      certificate,
      runtime,
      imdbRating,
      description,
    };

    const valuesClause = `('${movies.id}','${movies.title}', '${movies.year}', '${movies.imageUrl}', '${movies.certificate}', '${movies.runtime}', '${movies.imdbRating}', '${movies.description}')`;

    const sql = `INSERT INTO movies (id, title, year, image_url, certificate, runtime, imdb_rating, description) VALUES ${valuesClause}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            id: movies.id,
            title,
            year,
            imageUrl,
            certificate,
            runtime,
            imdbRating,
            description,
          });
        }
      });
    });
  },

  getAll: () => {
    const sql = "SELECT * FROM movies";

    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  getById: (id: string) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM movies WHERE id = ? LIMIT 1",
        [id],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.length > 0 ? result[0] : null);
          }
        }
      );
    }),

  getDetailsById: (id: string) =>
    new Promise((resolve, reject) => {
      console.log(id);
      connection.query(
        `SELECT
        movies.id AS movie_id,
        TRIM(movies.title) as title,
        movies.year,
        TRIM(movies.image_url) as image_url,
        GROUP_CONCAT(DISTINCT genres.name SEPARATOR ', ') AS genres,
        movies.runtime AS runtime,
        movies.imdb_rating as imdb_rating,
        TRIM(movies.description) AS description,
        GROUP_CONCAT(DISTINCT stars.name SEPARATOR ', ') AS stars,
        GROUP_CONCAT(DISTINCT directors.name SEPARATOR ', ') AS directors
    FROM
        movies
    JOIN
        movies_genres ON movies.id = movies_genres.movies_id
    JOIN
        genres ON movies_genres.genres_id = genres.id
    JOIN
        movies_stars ON movies.id = movies_stars.movies_id
    JOIN
        stars ON movies_stars.stars_id = stars.id
    JOIN
        movies_directors ON movies.id = movies_directors.movies_id
    JOIN
        directors ON movies_directors.directors_id = directors.id
    WHERE movies.id = ${id}
    GROUP BY
        movies.id, movies.title, movies.year, movies.image_url, movies.runtime, movies.imdb_rating, movies.description
    LIMIT 1`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            result[0].genres = (result[0].genres as string)
              .split(",")
              .map((genre) => genre.trim());
            result[0].stars = (result[0].stars as string)
              .split(",")
              .map((star) => star.trim());
            result[0].directors = (result[0].directors as string)
              .split(",")
              .map((director) => director.trim());
            resolve(result.length > 0 ? result[0] : null);
          }
        }
      );
    }),

  updateById: (
    id: string,
    title: string,
    year: string,
    imageUrl: string,
    certificate: string,
    runtime: string,
    imdbRating: string,
    description: string
  ) =>
    new Promise((resolve, reject) => {
      connection.query(
        `UPDATE movies SET title = '${title}', year = '${year}', image_url = '${imageUrl}', certificate = '${certificate}', runtime = '${runtime}', imdb_rating = '${imdbRating}', description = '${description}' WHERE id = '${id}'`,
        (error, result) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(result.affectedRows === 1 ? true : false);
          }
        }
      );
    }),

  deleteById: (id: string) =>
    new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM movies WHERE id = ?",
        [id],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.affectedRows === 1 ? true : false);
          }
        }
      );
    }),
};
