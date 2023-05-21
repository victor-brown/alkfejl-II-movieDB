import { v4 as uuidv4 } from "uuid";
import connection from "../connection";

export interface Genre {
  id: string;
  name: string;
}

export const GenresModel = {
  create: (name: string) => {
    const genre: Genre = {
      id: uuidv4(),
      name,
    };

    const valuesClause = `('${genre.id}','${genre.name}')`;

    const sql = `INSERT INTO genres (id, name) VALUES ${valuesClause}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            id: genre.id,
            name: genre.name,
          });
        }
      });
    });
  },

  getAll: () => {
    const sql = "SELECT * FROM genres";

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
};
