<h1 align="center">
  <br>
  <a href="#key-features"><img src=".\resources\Blue Cloud Minimal Technology Free Logo.png" alt="" width="200"></a>
  <br>
    Open Movie Database 
  <br>
</h1>

<h4 align="center">A simple movie database API with CMS</h4>

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

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#license">License</a>
</p>

<div align="center">
 <a href="#how-to-use"><img src=".\resources\Movie database design and management.png"/></a>
</div>

## Key Features

---

## How To Use:

### Project Setup and Execution with Lerna

> This project is managed with Lerna, a tool for managing JavaScript projects with multiple packages. Lerna makes it easier to work with a monorepo structure, where multiple packages coexist in the same repository.

Before getting started, make sure you have the following prerequisites installed on your machine:

- Node.js v16.4.1
- npm or Yarn (package managers)
- Docker

#### **Setup**

Follow these steps to set up the project:

1. Clone the repository:

   ```shell
   git clone https://github.com/victor-brown/alkfejl-II-movieDB.git
   ```

1. Navigate to the project root directory:

   ```shell
   cd <project-directory>
   ```

1. Install dependencies and bootstrap the project:
   `npm run bootstrap`

#### **Running the project**

To run the project, follow these steps:

1. Navigate to the root
1. Execute lerna (dev)

   `npm run dev`

   > This will start the docker container database
   >
   > - To stop the docker container run `npm run stop-db` command

   ***

#### **Access the project**

You can open the backend from http://127.0.0.1:5555/
You can open the frontend from http://127.0.0.1:5173/

### Conventional Commit Messages Guide

> **Introduction:** <br/> Conventional commit messages follow a specific format and provide a consistent way to communicate changes in version control repositories. By using conventional commit messages, you can improve the clarity, traceability, and automation of your software development workflow. This guide will walk you through the key principles and format of conventional commit messages.

#### Format:

A conventional commit message consists of three distinct parts:

`<type>(<scope>): <subject>`

Type: Describes the purpose of the commit. Use one of the following conventional types:

feat: A new feature or enhancement
fix: A bug fix
docs: Documentation changes
style: Code style changes (e.g., formatting, indentation)
refactor: Code refactoring without affecting its behavior
test: Adding or modifying tests
chore: Maintenance tasks, build system changes, etc.
Scope (optional): Indicates the module, component, or area of the project affected by the commit.

Subject: A brief summary of the change. Use the imperative mood (e.g., "Add," "Update," "Fix") and keep it concise.

Examples:
Here are a few examples of well-formed conventional commit messages:

```
feat(user): Add user registration functionality
fix(auth): Fix authentication token expiration issue
docs(readme): Update installation instructions
style(css): Format code according to style guide
refactor(utils): Refactor utility function for improved performance
test(api): Add unit tests for API endpoints
chore(deploy): Update deployment scripts
```

---

## [Download](https://github.com/victor-brown/alkfejl-II-movieDB/releases)

---

## License

> MIT

---

> [Barna Viktor](mailto:) &nbsp;&middot;&nbsp; [Tompa Gábor](mailto:)
