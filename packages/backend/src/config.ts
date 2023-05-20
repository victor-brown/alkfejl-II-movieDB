import { config as dotenvConfig } from "dotenv";

dotenvConfig();

interface Config {
  port: number;
  cors: {
    origin: string;
    allowedHeaders: string[];
    allowedOrigins: string[];
  };
  morgan: string;
  database: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
}

const config: Config = {
  port: (process.env.PORT as unknown as number) || 5555,
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    allowedOrigins: ["http://localhost:3000", "http://localhost:5173"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
  morgan: process.env.NODE_ENV === "production" ? "combined" : "dev",
  database: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "db",
  },
};

export default config;
