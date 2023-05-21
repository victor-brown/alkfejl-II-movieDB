import { Router } from "express";
import { genresRepository } from "../repositories/genres.repository";
import { createError } from "../factories/errorFactory";
import { ApiKeyModel } from "../models/apiKey.model";

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
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await genresRepository.getGenreById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const apiKey = req.query.apiKey;

    if (!apiKey && !(await ApiKeyModel.validateKey(apiKey as string)))
      throw createError("BadRequestError", { message: "Wrong API key" });

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

router.post("/update/:genre_id", async (req, res, next) => {
  try {
    const apiKey = req.query.apiKey;

    if (!apiKey && !(await ApiKeyModel.validateKey(apiKey as string)))
      throw createError("BadRequestError", { message: "Wrong API key" });

    const id = (req.params.genre_id as string) || "";
    const name = req.query.name as string;

    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    if (!name)
      throw createError("BadRequestError", {
        message: "name is a required field!",
      });

    const result = await genresRepository.updateById(id, name);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:genre_id", async (req, res, next) => {
  try {
    const apiKey = req.query.apiKey;

    if (!apiKey && !(await ApiKeyModel.validateKey(apiKey as string)))
      throw createError("BadRequestError", { message: "Wrong API key" });

    const id = (req.params.genre_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await genresRepository.deleteById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
