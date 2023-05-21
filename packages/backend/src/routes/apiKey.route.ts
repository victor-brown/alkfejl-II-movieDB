import { Router } from "express";
import { apiKeyRepository } from "../repositories/apiKey.repository";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await apiKeyRepository.createApiKey();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
