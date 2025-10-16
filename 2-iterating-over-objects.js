const friends = ['bert', 'ernie', 'elmo'];
console.log("here are my friends:");

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i])
}

const dictionary = {
  "hello": "a casual greeting",
  "rainbow": "a colorful arc of light",
  "cat": "the superior pet"
}

// First get an array of the keys of the object
const words = Object.keys(dictionary);
console.log(words); // ["hello", "rainbow", "cat"]

// Then, iterate through them to get their values
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  console.log(`The definition of ${word} is "${dictionary[word]}".`);
}