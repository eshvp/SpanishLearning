import express, { Request, Response } from 'express';
import multer from 'multer';
import { captureUserVoice } from '../utils/captureUserVoice';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

router.post('/', upload.single('audio'), async (req: MulterRequest, res: Response): Promise<void> => {
  const language = req.body.language || 'en-US';

  if (!req.file) {
    res.status(400).json({ error: 'No audio file uploaded.' });
    return;
  }

  try {
    const transcript = await captureUserVoice(req.file.path, language);
    res.json({ transcript });
  } catch (error) {
    console.error('Transcription error:', error instanceof Error ? error.message : error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
