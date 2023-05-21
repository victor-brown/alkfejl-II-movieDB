import { v4 as uuidv4 } from "uuid";
import connection from "../connection";

export interface Stars {
  id: string;
  name: string;
  about: string;
}

export const StarsModel = {
  create: (name: string, about: string) => {
    const star: Stars = {
      id: uuidv4(),
      name,
      about,
    };

    console.log(star);

    const valuesClause = `('${star.id}','${star.name}', '${star.about}')`;

    const sql = `INSERT INTO stars (id, name, about) VALUES ${valuesClause}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            id: star.id,
            name: star.name,
            about: star.about,
          });
        }
      });
    });
  },

  getAll: () => {
    const sql = "SELECT * FROM stars";

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
        "SELECT * FROM stars WHERE id = ? LIMIT 1",
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
        `UPDATE stars SET ${params} WHERE id = ?`,
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
        "DELETE FROM stars WHERE id = ?",
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
