// backend/src/utils/normalize.ts
export function normalizeText(text: string): string {
    return text
      .normalize('NFKD')
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
  }
  