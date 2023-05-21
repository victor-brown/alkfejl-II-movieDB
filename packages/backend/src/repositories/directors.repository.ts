import { Connection } from "mysql";
import connection from "../connection";
import { createError } from "../factories/errorFactory";
import { DirectorsModel } from "../models/directors.model";

class DirectorsRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async createNewDirector(name: string, about: string) {
    try {
      const director = await DirectorsModel.create(name, about);
      return director;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to create Director",
      });
    }
  }

  async getAllDirector() {
    try {
      const directors = await DirectorsModel.getAll();
      return directors;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Directors",
      });
    }
  }

  async getDirectorById(id: string) {
    try {
      const director = await DirectorsModel.getById(id);
      return director;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Director",
      });
    }
  }

  async updateById(id: string, name: string, about: string) {
    try {
      const director = await DirectorsModel.updateById(id, name, about);
      return director;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to update Director",
      });
    }
  }

  async deleteById(id: string) {
    try {
      const director = await DirectorsModel.deleteById(id);
      return director;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to delete Director",
      });
    }
  }
}

export const directorsRepository: DirectorsRepository = new DirectorsRepository(connection);
