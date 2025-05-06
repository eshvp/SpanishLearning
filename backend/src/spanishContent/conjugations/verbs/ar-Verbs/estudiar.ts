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

export const estudiar: ExampleVerb = {
  "verb": "estudiar",
  "type": "regular",
  "tense": "present",
  "ending": "-ar",
  "conjugations": {
    "yo": "estudio",
    "tú": "estudias",
    "él/ella/usted": "estudia",
    "nosotros": "estudiamos",
    "vosotros": "estudiáis",
    "ellos/ellas/ustedes": "estudian"
  },
  "notes": "Standard -ar verb conjugation."
};

export default estudiar;