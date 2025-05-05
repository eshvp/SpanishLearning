// backend/src/routes/playAudio.ts
import express, { Request, Response } from 'express';
import { generateAudio } from '../utils/playAudio';
import fs from 'fs';

const router = express.Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { text, language } = req.body;

  if (!text || !language) {
    res.status(400).json({ error: 'Missing text or language.' });
    return;
  }

  try {
    const audioPath = await generateAudio(text, language);

    const stream = fs.createReadStream(audioPath);
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'inline; filename="speech.mp3"',
    });

    stream.pipe(res);

    stream.on('close', () => {
      fs.unlink(audioPath, (err) => {
        if (err) console.warn(`Failed to delete temp audio: ${audioPath}`, err);
      });
    });
  } catch (err: any) {
    console.error('TTS error:', err.message);
    res.status(500).json({ error: 'Audio generation failed.' });
  }
});

export default router;
