// backend/src/utils/playAudio.ts
import fs from 'fs';
import path from 'path';
import textToSpeech, { protos } from '@google-cloud/text-to-speech';

const client = new textToSpeech.TextToSpeechClient();

export async function generateAudio(text: string, languageCode: string): Promise<string> {
  const request = {
    input: { text },
    voice: { languageCode, ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  // Ensure proper typing for Google Cloud TTS
  const [response] = await client.synthesizeSpeech(request as protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest);
  
  // Create temp directory if it doesn't exist
  const tempDir = path.resolve('temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  const filename = `tts_${Date.now()}.mp3`;
  const filepath = path.join(tempDir, filename);

  // Use promises for file operations
  await fs.promises.writeFile(filepath, response.audioContent as Buffer);
  return filepath;
}
