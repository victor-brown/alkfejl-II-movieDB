import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import { errorHandler } from "./utils/errorHandler";
import bodyParser from "body-parser";
import apiKeyRouter from "./routes/apiKey.route";

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

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is is listening at http://localhost:${port}`);
});
