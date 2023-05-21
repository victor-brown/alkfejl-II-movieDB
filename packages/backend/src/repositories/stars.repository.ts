import { Connection } from "mysql";
import connection from "../connection";
import { createError } from "../factories/errorFactory";
import { StarsModel } from "../models/stars.model";

class StarsRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async createNewStar(name: string, about: string) {
    try {
      const star = await StarsModel.create(name, about);
      return star;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to create Star",
      });
    }
  }

  async getAllStar() {
    try {
      const stars = await StarsModel.getAll();
      return stars;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Stars",
      });
    }
  }

  async getStarById(id: string) {
    try {
      const star = await StarsModel.getById(id);
      return star;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to fetch Star",
      });
    }
  }

  async updateById(id: string, name: string, about: string) {
    try {
      const star = await StarsModel.updateById(id, name, about);
      return star;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to update Star",
      });
    }
  }

  async deleteById(id: string) {
    try {
      const star = await StarsModel.deleteById(id);
      return star;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to delete Star",
      });
    }
  }
}

export const starsRepository: StarsRepository = new StarsRepository(connection);
