import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import { errorHandler } from "./utils/errorHandler";
import bodyParser from "body-parser";
import apiKeyRouter from "./routes/apiKey.route";
import genresRouter from "./routes/genres.route";
import starsRouter from "./routes/stars.route";
import directorsRouter from "./routes/directors.route";
import moviesRouter from "./routes/movies.route";

const app = express();
const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(config.cors));
app.use(helmet());
app.use(morgan(config.morgan));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/apikey", apiKeyRouter);
app.use("/genres", genresRouter);
app.use("/stars", starsRouter);
app.use("/directors", directorsRouter);
app.use("/movies", moviesRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is is listening at http://localhost:${port}`);
});
