import arVerbPresent from './backend/src/spanishContent/conjugations/presentTense/ar-Verbs.ts';

// Function to display conjugation in terminal with formatting
function displayConjugation(conjugationPattern: typeof arVerbPresent) {
  console.log('\n=== Verb Conjugation Pattern ===');
  console.log(`Tense: ${conjugationPattern.tense}`);
  console.log(`Ending: ${conjugationPattern.ending}`);
  console.log(`Type: ${conjugationPattern.type}`);
  console.log(`\nExplanation: ${conjugationPattern.explanation}\n`);
  
  console.log('=== Conjugation Endings ===');
  console.log('Subject'.padEnd(25) + 'Ending'.padEnd(10) + 'Translation');
  console.log(''.padEnd(60, '-'));
  
  // Flat map the grid to process all conjugation endings
  conjugationPattern.conjugation_grid.flat().forEach(value => {
    console.log(
      `${value.subject_pronoun}`.padEnd(25) + 
      `${value.ending}`.padEnd(10) + 
      `${value.translation}`
    );
  });
  
  // Example with a sample verb
  const sampleVerb = 'hablar';
  const verbStem = sampleVerb.slice(0, -2); // Remove the 'ar'
  
  console.log('\n=== Example with verb: hablar (to speak) ===');
  console.log('Subject'.padEnd(25) + 'Conjugation'.padEnd(15) + 'Translation');
  console.log(''.padEnd(60, '-'));
  
  conjugationPattern.conjugation_grid.flat().forEach(value => {
    console.log(
      `${value.subject_pronoun}`.padEnd(25) + 
      `${verbStem}${value.ending}`.padEnd(15) + 
      `${value.translation} speak/s`
    );
  });
}

// Display the conjugation pattern
displayConjugation(arVerbPresent);