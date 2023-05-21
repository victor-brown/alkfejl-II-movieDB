import { Router } from "express";
import { genresRepository } from "../repositories/genres.repository";
import { createError } from "../factories/errorFactory";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await genresRepository.getAllGenre();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/:genre_id", async (req, res, next) => {
  try {
    const id = (req.params.genre_id as string) || "";
    const result = await genresRepository.getGenreById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const name = req.query.name as string;

    if (!name)
      throw createError("BadRequestError", {
        message: "name is a required field!",
      });

    const result = await genresRepository.createNewGenre(name);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
