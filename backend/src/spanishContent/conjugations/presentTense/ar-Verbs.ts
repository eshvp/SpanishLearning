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

export const arVerbPresent: VerbConjugationPattern = {
  tense: "present",
  ending: "-ar",
  type: "regular",
  explanation:
    "These are the standard present-tense endings for regular -AR verbs in Spanish. Attach them to the verb stem (remove -ar) to conjugate.",
  conjugation_grid: [
    [
      {
        subject_pronoun: "yo",
        ending: "o",
        translation: "I"
      },
      {
        subject_pronoun: "nosotros / nosotras",
        ending: "amos",
        translation: "we (masculine / feminine)"
      }
    ],
    [
      {
        subject_pronoun: "tú",
        ending: "as",
        translation: "you (informal singular)"
      },
      {
        subject_pronoun: "vosotros / vosotras",
        ending: "áis",
        translation: "you all (informal, Spain)"
      }
    ],
    [
      {
        subject_pronoun: "él / ella / usted",
        ending: "a",
        translation: "he / she / you (formal singular)"
      },
      {
        subject_pronoun: "ellos / ellas / ustedes",
        ending: "an",
        translation: "they (masculine / feminine) / you all (formal)"
      }
    ]
  ]
};

export default arVerbPresent;
