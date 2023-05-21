import { v4 as uuidv4 } from "uuid";
import connection from "../connection";

export interface Directors {
  id: string;
  name: string;
  about: string;
}

export const DirectorsModel = {
  create: (name: string, about: string) => {
    const director: Directors = {
      id: uuidv4(),
      name,
      about,
    };

    const valuesClause = `('${director.id}','${director.name}', '${director.about}')`;

    const sql = `INSERT INTO directors (id, name, about) VALUES ${valuesClause}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            id: director.id,
            name: director.name,
            about: director.about,
          });
        }
      });
    });
  },

  getAll: () => {
    const sql = "SELECT * FROM directors";

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
        "SELECT * FROM directors WHERE id = ? LIMIT 1",
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

  updateById: (id: string, name: string, about: string) =>
    new Promise((resolve, reject) => {
      const params = [];
      const valuesClause = [];
      if (name.length !== 0) {
        params.push("name = ?");
        valuesClause.push(name);
      }
      if (about.length !== 0) {
        params.push("about = ?");
        valuesClause.push(about);
      }

      connection.query(
        `UPDATE directors SET ${params} WHERE id = ?`,
        [...valuesClause, id],
        (error, result) => {
          if (error) {
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
        "DELETE FROM directors WHERE id = ?",
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
