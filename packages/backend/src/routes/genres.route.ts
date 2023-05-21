import { Router } from "express";
import { genresRepository } from "../repositories/genres.repository";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await genresRepository.getAllGenre();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
