// backend/src/utils/translateText.ts
import axios from 'axios';
import dotenv from 'dotenv';
import { DeepLTranslationResponse } from '../types/apiTypes';

dotenv.config();

const API_KEY = process.env.DEEPL_API_KEY;
const API_URL = 'https://api-free.deepl.com/v2/translate';

export async function translateText(text: string, targetLanguage: string): Promise<string> {
  if (!API_KEY) {
    console.error("Error: DeepL API key is not configured.");
    return "[Translation Error: API key not configured.]";
  }

  const params = new URLSearchParams({
    auth_key: API_KEY,
    text: text,
    target_lang: targetLanguage.toUpperCase(),
  });

  try {
    const response = await axios.post<DeepLTranslationResponse>(API_URL, params, { timeout: 10000 });
    const data = response.data;

    if (data.translations && data.translations.length > 0) {
      return data.translations[0].text;
    } else {
      console.error(`Unexpected API response format:`, data);
      return "[Translation Error: Unexpected API response format]";
    }
  } catch (error: any) {
    if (error.response) {
      console.error("API response error:", error.response.data);
      return `[Translation Error: ${error.response.data.message || 'Unknown response error'}]`;
    } else {
      console.error("General error:", error.message);
      return `[Error: ${error.message}]`;
    }
  }
}
