import { Connection } from "mysql";
import connection from "../connection";
import { createError } from "../factories/errorFactory";
import { GenresModel } from "../models/genres.model";

class GenresRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async createNewGenre(name: string) {
    try {
      const genre = await GenresModel.create(name);
      return genre;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to create Genre",
      });
    }
  }

  async getAllGenre() {
    try {
      const genres = await GenresModel.getAll();
      return genres;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Genres",
      });
    }
  }
  async getGenreById(id: string) {
    try {
      const genre = await GenresModel.getById(id);
      return genre;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Genre",
      });
    }
  }
}

export const genresRepository: GenresRepository = new GenresRepository(
  connection
);
