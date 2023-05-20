import { Router } from "express";
import { apiKeyService } from "../services/apiKey.service";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await apiKeyService.getApiKey();

    res.send(result);
  } catch (err) {
    next(err);
  }
});

export default router;
