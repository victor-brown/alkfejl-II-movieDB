import { Router } from "express";
import { directorsRepository } from "../repositories/directors.repository";
import { createError } from "../factories/errorFactory";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await directorsRepository.getAllDirector();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/:director_id", async (req, res, next) => {
  try {
    const id = (req.params.director_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await directorsRepository.getDirectorById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const name = req.query.name as string;
    const about = req.query.about as string;

    if (!name)
      throw createError("BadRequestError", {
        message: "name is a required field!",
      });
    if (!about)
      throw createError("BadRequestError", {
        message: "about is a required field!",
      });

    const result = await directorsRepository.createNewDirector(name, about);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/update/:director_id", async (req, res, next) => {
  try {
    const id = (req.params.director_id as string) || "";
    const name = req.query.name as string;
    const about = req.query.about as string;

    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    if (!name && !about)
      throw createError("BadRequestError", {
        message: "name AND/OR about is a required field!",
      });

    const result = await directorsRepository.updateById(
      id,
      name || "",
      about || ""
    );

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:director_id", async (req, res, next) => {
  try {
    const id = (req.params.director_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await directorsRepository.deleteById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
