import { Router } from "express";
import { starsRepository } from "../repositories/stars.repository";
import { createError } from "../factories/errorFactory";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await starsRepository.getAllStar();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/:star_id", async (req, res, next) => {
  try {
    const id = (req.params.star_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await starsRepository.getStarById(id);

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

    const result = await starsRepository.createNewStar(name, about);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post("/update/:star_id", async (req, res, next) => {
  try {
    const id = (req.params.star_id as string) || "";
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

    const result = await starsRepository.updateById(
      id,
      name || "",
      about || ""
    );

    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:star_id", async (req, res, next) => {
  try {
    const id = (req.params.star_id as string) || "";
    if (!id)
      throw createError("BadRequestError", {
        message: "id is a required field!",
      });

    const result = await starsRepository.deleteById(id);

    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
