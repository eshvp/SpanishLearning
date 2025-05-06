export interface ConjugationEnding {
  ending: string;
  subject_pronoun: string;
  translation: string;
}

export interface VerbConjugationPattern {
  tense: string;
  ending: string;
  type: string;
  explanation: string;
  conjugation_grid: ConjugationEnding[][];
}

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