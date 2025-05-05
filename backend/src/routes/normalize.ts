// backend/src/routes/normalize.ts
import express, { Request, Response } from 'express';
import { normalizeText } from '../utils/normalize';

const router = express.Router();

router.post('/', (req: Request, res: Response): void => {
  const { text } = req.body;

  if (!text) {
    res.status(400).json({ error: 'Missing text field.' });
    return;
  }

  try {
    const normalized = normalizeText(text);
    res.json({ normalized });
  } catch (err: any) {
    console.error('Normalization error:', err.message);
    res.status(500).json({ error: 'Text normalization failed.' });
  }
});

export default router;
