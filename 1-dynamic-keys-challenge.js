/* 
When the key name of a property is not known until 
you run the program, we can add "dynamic" properties 
using bracket notation (we can't use dot notation)

Fix the program below so that it lets users add words
to the dictionary!
*/

const prompt = require("prompt-sync")({ sigint: true });

const dictionary = {
  "hello": "a casual greeting",
  "rainbow": "a colorful arc of light",
  "cat": "the superior pet"
}

while (true) {
  console.log("Here are your words: ", dictionary);
  const newWord = prompt("Add a word to your dictionary, or press q to exit. ");

  if (newWord === 'q') { // a guard clause
    break;
  }

  const definition = prompt(`Okay, what is the definition of ${newWord}? `);

  // add the new word and its definition to the dictionary!
  dictionary[newWord] = definition;
  prompt('\nPress Enter to continue')
  console.clear();
}
