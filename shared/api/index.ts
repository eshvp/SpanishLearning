import axios from 'axios';

// Base API configuration
const api = axios.create({
  baseURL: 'http://localhost:3000', // Change this to your actual backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// API endpoints
export const translateApi = {
  translate: async (text: string, targetLang: string) => {
    const response = await api.post('/translate', { text, targetLang });
    return (response.data as { translation: string }).translation;
  }
};

export const audioApi = {
  speak: async (text: string, language: string) => {
    const response = await api.post('/speak', { text, language }, {
      responseType: 'blob'
    });
    return response.data;
  },
  
  transcribe: async (audioFile: File, language: string) => {
    const formData = new FormData();
    formData.append('audio', audioFile);
    formData.append('language', language);
    
    const response = await api.post('/speech', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return (response.data as { transcript: string }).transcript;
  }
};

export const textApi = {
  normalize: async (text: string) => {
    const response = await api.post('/normalize', { text });
    return (response.data as { normalized: string }).normalized;
  }
};

export default {
  translate: translateApi,
  audio: audioApi,
  text: textApi,
};