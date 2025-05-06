export interface ExampleVerb {
  verb: string;
  type: string;
  tense: string;
  ending: string;
  conjugations: {
    yo: string;
    tú: string;
    "él/ella/usted": string;
    nosotros: string;
    vosotros: string;
    "ellos/ellas/ustedes": string;
  };
  notes: string;
}

export const bailar: ExampleVerb = {
  "verb": "bailar",
  "type": "regular",
  "tense": "present",
  "ending": "-ar",
  "conjugations": {
    "yo": "bailo",
    "tú": "bailas",
    "él/ella/usted": "baila",
    "nosotros": "bailamos",
    "vosotros": "bailáis",
    "ellos/ellas/ustedes": "bailan"
  },
  "notes": "Standard -ar verb conjugation."
};

export default bailar;