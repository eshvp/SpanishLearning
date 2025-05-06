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

export const hablar: ExampleVerb = {
  "verb": "hablar",
  "type": "regular",
  "tense": "present",
  "ending": "-ar",
  "conjugations": {
    "yo": "hablo",
    "tú": "hablas",
    "él/ella/usted": "habla",
    "nosotros": "hablamos",
    "vosotros": "habláis",
    "ellos/ellas/ustedes": "hablan"
  },
  "notes": "Standard -ar verb conjugation."
};

export default hablar;