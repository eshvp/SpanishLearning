// DeepL API response interfaces
export interface DeepLTranslation {
  detected_source_language: string;
  text: string;
}

export interface DeepLTranslationResponse {
  translations: DeepLTranslation[];
}