# Rendszerterv

# A rendszer célja

Egy filmes API létrehozása SQL alapú adatbázissal, amiben bárki számára kereshetőek, és megfelelő jogosultásggal (API kulcs) szerkeszthetőek az adatok.

## 2. Projektterv

### 2.1 Szerepkörök, felelősségek

Product Owner:

- **Tompa Gábor**
  Meghatározza az üzleti igényeknek megfelelő fejlesztési feladatokat. Frontend

Scrum master:

- **Barna Viktor**
  Megtervezi és nyomonköveti a fejlesztés részfelatatait, napi szinten kapcsolatot tart a fejlesztőkkel, esetlegesen felmerülő akadályok esetén beavatkozik, és segít megoldani.
  A projekt indulásakor segít felállítani a prioritásait a feladatoknak, és a megfelelő sorrendben kerülnek a sprintekbe ezek.
  A projekt végén retrospektivet tart a résztvevőkkel.
  DevOps, Backend

### 2.2 Projektmunkások és felelősségeik

Architecture:

- **Barna Viktor**

Development:

- **Barna Viktor**
- **Tompa Gábor**

## 3. Követelmények

A filmek adatbázisa legyen elérhető API hívásokon keresztül.
Az API híváson keresztül minden film olvasható legyen.
Módosítani, Hozzáadni és törölni csak **hitelesítés** után lehessen.
A hitelesítéshez **API kulcsot** kell alkamazni.

## 5. Funkcionális terv

> [TERV](./funkcionalis-specifikacio.md)

## 6. Fizikai környezet

## 8. Architekturális terv

[![Monorepo By - Lerna](https://img.shields.io/badge/Monorepo_By-Lerna-2ea44f?style=for-the-badge&logo=lerna)](https://lerna.js.org)
[![Frontend - React](https://img.shields.io/badge/Frontend-React-2ea44f?style=for-the-badge&logo=react)](https://react.dev)
[![Backend - Node JS](https://img.shields.io/badge/Backend-Node_JS-2ea44f?style=for-the-badge&logo=node.js)](https://nodejs.org/en)
[![Database - MySql](https://img.shields.io/badge/Database-MySql-2ea44f?style=for-the-badge&logo=mySql)](https://www.mysql.com)

[![Made with GH Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue?logo=github-actions&logoColor=white)](https://github.com/features/actions "Go to GitHub Actions homepage")
[![Made with Docker](https://img.shields.io/badge/Made_with-Docker-blue?logo=docker&logoColor=white)](https://www.docker.com/ "Go to Docker homepage")
![Love with - TypeScript](https://img.shields.io/badge/Love_with-TypeScript-blue?logo=typescript&logoColor=white)
![Formatted with - Conventional Commits](https://img.shields.io/badge/Formatted_with-Conventional_Commits-blue?logo=conventionalcommits&logoColor=white)
![Engine - Express](https://img.shields.io/badge/Engine-Express-blue?logo=express&logoColor=white)
![Linter - ESlint](https://img.shields.io/badge/Linter-ESlint-blue?logo=eslint&logoColor=white)
![Build tool - Vite](https://img.shields.io/badge/Build_tool-Vite-blue?logo=vite&logoColor=white)
![Hooked by - Husky](https://img.shields.io/badge/Hooked_by-Husky-blue)

### 8.1 Architekturális tervezési minta

### 8.2 Az alkalmazás rétegei, fő komponensei, ezek kapcsolatai

## 9. Adatbázisterv

|             | api_keys    |         |
| ----------- | ----------- | ------- |
| id          | INT         | PRIMARY |
| api_key     | VARCHAR 255 | UNIQUE  |
| valid_until | DATE        |         |

|       | directors   |         |
| ----- | ----------- | ------- |
| id    | INT         | PRIMARY |
| name  | VARCHAR 255 | UNIQUE  |
| about | TEXT        |         |

|      | genres     |         |
| ---- | ---------- | ------- |
| id   | INT        | PRIMARY |
| name | VARCHAR 45 | UNIQUE  |

|             | movies      |         |
| ----------- | ----------- | ------- |
| id          | INT         | PRIMARY |
| title       | VARCHAR 100 | UNIQUE  |
| year        | INT         |         |
| image_url   | VARCHAR 255 |         |
| certificate | VARCHAR 45  | NULL    |
| runtime     | INT         | NULL    |
| imdb_rating | FLOAT       | NULL    |
| description | TEXT        |         |

|              | movies_directors |     |
| ------------ | ---------------- | --- |
| movies_id    | INT              |     |
| directors_id | INT              |     |

|           | movies_genres |     |
| --------- | ------------- | --- |
| movies_id | INT           |     |
| genres_id | INT           |     |

|           | movies_stars |     |
| --------- | ------------ | --- |
| movies_id | INT          |     |
| stars_id  | INT          |     |

|       | stars      |         |
| ----- | ---------- | ------- |
| id    | INT        | PRIMARY |
| name  | VARCHAR 60 | NULL    |
| about | TEXT       |         |
