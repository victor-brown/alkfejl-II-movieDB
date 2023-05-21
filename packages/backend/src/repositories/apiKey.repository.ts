import { Connection } from "mysql";
import connection from "../connection";
import { ApiKeyModel } from "../models/apiKey.model";
import { createError } from "../factories/errorFactory";

class ApiKeyRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async createApiKey() {
    try {
      const apiKey = await ApiKeyModel.create();
      return apiKey;
    } catch (error) {
      return createError("InternalServerError", {
        message: "Failed to create API key",
      });
    }
  }
}

export const apiKeyRepository: ApiKeyRepository = new ApiKeyRepository(
  connection
);
