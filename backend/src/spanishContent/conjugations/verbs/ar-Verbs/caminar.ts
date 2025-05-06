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

export const caminar: ExampleVerb = {
  "verb": "caminar",
  "type": "regular",
  "tense": "present",
  "ending": "-ar",
  "conjugations": {
    "yo": "camino",
    "tú": "caminas",
    "él/ella/usted": "camina",
    "nosotros": "caminamos",
    "vosotros": "camináis",
    "ellos/ellas/ustedes": "caminan"
  },
  "notes": "Standard -ar verb conjugation."
};

export default caminar;