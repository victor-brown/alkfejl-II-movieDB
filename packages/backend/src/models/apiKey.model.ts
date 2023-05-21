import { v4 as uuidv4 } from "uuid";
import { getNextMonthDate, toMySqlDate } from "../utils/dateHelper";
import connection from "../connection";

export interface ApiKey {
  id: string;
  apiKey: string;
  validUntil: Date;
}

export const ApiKeyModel = {
  create: () => {
    const apiKey: ApiKey = {
      id: uuidv4(),
      apiKey: generateRandomKey(),
      validUntil: getNextMonthDate(new Date()),
    };

    const valuesClause = `('${apiKey.id}','${apiKey.apiKey}', '${toMySqlDate(
      apiKey.validUntil
    )}')`;

    const sql = `INSERT INTO api_keys (id, api_key, valid_until) VALUES ${valuesClause}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            id: apiKey.id,
            api_key: apiKey.apiKey,
            valid_utnil: apiKey.validUntil,
          });
        }
      });
    });
  },

  validateKey: (api_key: string) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM api_keys WHERE api_key = ? LIMIT 1",
        [api_key],
        (error, results) => {
          if (error) {
            reject(error);
          } else if (results.length === 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    }),
};

function generateRandomKey() {
  return Math.random().toString(36).slice(2, 32).toUpperCase();
}
