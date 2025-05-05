// backend/src/routes/translate.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { DeepLTranslationResponse } from '../types/apiTypes';

dotenv.config();

const router = express.Router();

const API_KEY = process.env.DEEPL_API_KEY;
const API_URL = 'https://api-free.deepl.com/v2/translate';

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { text, targetLang } = req.body;

  if (!API_KEY) {
    res.status(500).json({ error: 'DeepL API key not configured.' });
    return;
  }

  if (!text || !targetLang) {
    res.status(400).json({ error: 'Missing text or targetLang parameter.' });
    return;
  }

  try {
    const response = await axios.post<DeepLTranslationResponse>(
      API_URL,
      new URLSearchParams({
        auth_key: API_KEY,
        text,
        target_lang: targetLang.toUpperCase(),
      }),
      { timeout: 10000 }
    );

    const translations = response.data.translations;
    if (translations && translations.length > 0) {
      res.json({ translation: translations[0].text });
    } else {
      res.status(500).json({ error: 'Unexpected API response format.', data: response.data });
    }

  } catch (error: any) {
    console.error('Translation error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
