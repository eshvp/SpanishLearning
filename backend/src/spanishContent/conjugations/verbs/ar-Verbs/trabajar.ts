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

export const trabajar: ExampleVerb = {
  "verb": "trabajar",
  "type": "regular",
  "tense": "present",
  "ending": "-ar",
  "conjugations": {
    "yo": "trabajo",
    "tú": "trabajas",
    "él/ella/usted": "trabaja",
    "nosotros": "trabajamos",
    "vosotros": "trabajáis",
    "ellos/ellas/ustedes": "trabajan"
  },
  "notes": "Standard -ar verb conjugation."
};

export default trabajar;