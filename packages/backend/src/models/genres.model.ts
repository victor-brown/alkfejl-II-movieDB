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

  getById: (id: string) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM genres WHERE id = ? LIMIT 1",
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

  updateById: (id: string, name: string) =>
    new Promise((resolve, reject) => {
      connection.query(
        "UPDATE genres SET name = ? WHERE id = ?",
        [name, id],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.affectedRows === 1 ? { id, name } : null);
          }
        }
      );
    }),

  deleteById: (id: string) =>
    new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM genres WHERE id = ?",
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
