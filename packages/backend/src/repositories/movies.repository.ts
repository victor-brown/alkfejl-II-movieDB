import { Connection } from "mysql";
import connection from "../connection";
import { createError } from "../factories/errorFactory";
import { MoviesModel } from "../models/movies.model";

class MoviesRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async createNewMovie(
    title: string,
    year: string,
    imageUrl: string,
    certificate: string,
    runtime: string,
    imdbRating: string,
    description: string
  ) {
    try {
      const movie = await MoviesModel.create(
        title,
        year,
        imageUrl,
        certificate,
        runtime,
        imdbRating,
        description
      );
      return movie;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to create Movie",
      });
    }
  }

  async getAllMovie() {
    try {
      const movies = await MoviesModel.getAll();
      return movies;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Movies",
      });
    }
  }

  async getMovieById(id: string) {
    try {
      const movie = await MoviesModel.getById(id);
      return movie;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Movie",
      });
    }
  }

  async getMovieDetailsById(id: string) {
    try {
      const movie = await MoviesModel.getDetailsById(id);
      return movie;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Movie Details",
      });
    }
  }

  async updateById(
    id: string,
    title: string,
    year: string,
    imageUrl: string,
    certificate: string,
    runtime: string,
    imdbRating: string,
    description: string
  ) {
    try {
      const movie = await MoviesModel.updateById(
        id,
        title,
        year,
        imageUrl,
        certificate,
        runtime,
        imdbRating,
        description
      );
      return movie;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to update Movie",
      });
    }
  }

  async deleteById(id: string) {
    try {
      const movie = await MoviesModel.deleteById(id);
      return movie;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to delete Movie",
      });
    }
  }
}

export const moviesRepository: MoviesRepository = new MoviesRepository(
  connection
);
