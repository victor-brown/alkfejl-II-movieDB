import { Connection } from "mysql";
import { ApiKey } from "../models/apiKey.mode";
import { toMySqlDate } from "../utils/dateHelper";
import connection from "../connection";

class ApiKeyRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async getNewKey(apiKey: ApiKey): Promise<string> {
    const valuesClause = `('${apiKey.id}', '${apiKey.api_key}', '${toMySqlDate(
      apiKey.valid_until
    )}')`;

    const sql = `INSERT INTO api_keys (id, api_key, valid_until) VALUES ${valuesClause}`;

    return new Promise<string>((resolve, reject) => {
      this.connection.query(sql, (err) =>
        err ? reject(err) : resolve(JSON.stringify(apiKey, undefined, 3))
      );
    });
  }
}

export const apiKeyRepository: ApiKeyRepository = new ApiKeyRepository(
  connection
);
