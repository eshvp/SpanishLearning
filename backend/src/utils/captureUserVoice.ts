// backend/src/utils/captureUserVoice.ts
import fs from 'fs';
import speech from '@google-cloud/speech';
import { protos } from '@google-cloud/speech';

const client = new speech.SpeechClient();

export async function captureUserVoice(audioFilePath: string, languageCode = 'en-US'): Promise<string | null> {
  try {
    const file = fs.readFileSync(audioFilePath);
    const audioBytes = file.toString('base64');

    const request: protos.google.cloud.speech.v1.IRecognizeRequest = {
      audio: { content: audioBytes },
      config: {
        encoding: protos.google.cloud.speech.v1.RecognitionConfig.AudioEncoding.MP3,
        sampleRateHertz: 16000,
        languageCode,
      },
    };

    const [response] = await client.recognize(request);
    const transcription = response.results
      ?.map(result => result.alternatives?.[0]?.transcript)
      .join('\n')
      .trim();

    return transcription || null;
  } catch (error: any) {
    console.error('Speech recognition error:', error.message);
    return null;
  }
}
