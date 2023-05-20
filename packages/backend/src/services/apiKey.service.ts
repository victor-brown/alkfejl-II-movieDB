import { ApiKey } from "../models/apiKey.mode";
import { apiKeyRepository } from "../repositories/apiKey.repository";

class ApiKeyService {
  async getApiKey() {
    const newKey: ApiKey = new ApiKey(
      Math.random().toString(36).slice(2, 8).toUpperCase()
    );

    return await apiKeyRepository.getNewKey(newKey);
  }
}

export const apiKeyService: ApiKeyService = new ApiKeyService();
