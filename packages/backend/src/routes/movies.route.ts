import { Router } from "express";
import { moviesRepository } from "../repositories/movies.repository";
import { createError } from "../factories/errorFactory";
import { ApiKeyModel } from "../models/apiKey.model";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await moviesRepository.getAllMovie();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/:movie_id", async (req, res, next) => {
  try {
    const id = (req.params.movie_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await moviesRepository.getMovieById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/details/:movie_id", async (req, res, next) => {
  try {
    const id = (req.params.movie_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await moviesRepository.getMovieDetailsById(id);

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

    const title = req.query.title as string;
    const year = req.query.year as string;
    const imageUrl = req.query.imageUrl as string;
    const certificate = req.query.certificate as string;
    const runtime = req.query.runtime as string;
    const imdbRating = req.query.imdbRating as string;
    const description = req.query.description as string;

    if (!title)
      throw createError("BadRequestError", {
        message: "title is a required field!",
      });
    if (!year)
      throw createError("BadRequestError", {
        message: "year is a required field!",
      });
    if (!imageUrl)
      throw createError("BadRequestError", {
        message: "imageUrl is a required field!",
      });
    if (!certificate)
      throw createError("BadRequestError", {
        message: "certificate is a required field!",
      });
    if (!runtime)
      throw createError("BadRequestError", {
        message: "runtime is a required field!",
      });
    if (!imdbRating)
      throw createError("BadRequestError", {
        message: "imdbRating is a required field!",
      });
    if (!description)
      throw createError("BadRequestError", {
        message: "description is a required field!",
      });

    const result = await moviesRepository.createNewMovie(
      title,
      year,
      imageUrl,
      certificate,
      runtime,
      imdbRating,
      description
    );

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/update/:movie_id", async (req, res, next) => {
  try {
    const apiKey = req.query.apiKey;

    if (!apiKey && !(await ApiKeyModel.validateKey(apiKey as string)))
      throw createError("BadRequestError", { message: "Wrong API key" });

    const id = (req.params.movie_id as string) || "";
    const title = req.query.title as string;
    const year = req.query.year as string;
    const imageUrl = req.query.imageUrl as string;
    const certificate = req.query.certificate as string;
    const runtime = req.query.runtime as string;
    const imdbRating = req.query.imdbRating as string;
    const description = req.query.description as string;

    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    if (!title)
      throw createError("BadRequestError", {
        message: "title is a required field!",
      });
    if (!year)
      throw createError("BadRequestError", {
        message: "year is a required field!",
      });
    if (!imageUrl)
      throw createError("BadRequestError", {
        message: "imageUrl is a required field!",
      });
    if (!certificate)
      throw createError("BadRequestError", {
        message: "certificate is a required field!",
      });
    if (!runtime)
      throw createError("BadRequestError", {
        message: "runtime is a required field!",
      });
    if (!imdbRating)
      throw createError("BadRequestError", {
        message: "imdbRating is a required field!",
      });
    if (!description)
      throw createError("BadRequestError", {
        message: "description is a required field!",
      });

    const result = await moviesRepository.updateById(
      id,
      title,
      year,
      imageUrl,
      certificate,
      runtime,
      imdbRating,
      description
    );

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:movie_id", async (req, res, next) => {
  try {
    const apiKey = req.query.apiKey;

    if (!apiKey && !(await ApiKeyModel.validateKey(apiKey as string)))
      throw createError("BadRequestError", { message: "Wrong API key" });

    const id = (req.params.movie_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await moviesRepository.deleteById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
