const dictionary = {
  hello: "a casual greeting",
  rainbow: "a colorful arc of light",
  cat: "the superior pet",
  "see ya": "a casual way to say 'see you later'"
}

const user = {
  "userId": 44292,
  "username": 'c0d3rkid',
  "password": 'jswiz1234',
  "friends": ['iLoveSoccer123', 'pythonNinja', 'messiGOAT'],
  "favoriteMeal": {
    "name": 'PB&J',
    "ingredients": ['peanut butter', 'jelly', 'bread']
  }
}

// Dot notation is the faster to type and easier to read than bracket notation
console.log(`Hi, my name is ${user.username}`);

// Bracket notation requires a string to be provided
console.log(`Hi, my name is ${user["username"]}`);

// Dot (and bracket) notation can be used to modify existing values, or create new ones!
user.password = 'try to break in now!';
user.isAdmin = false;

console.log(user);

// If a property holds an object or array, we can use dot/bracket notation on that value!
console.log(`My favorite meal is ${user.favoriteMeal.name}`);
console.log(`My best friend is ${user.friends[0]}`);

// Delete properties by using the `delete` keyword followed by dot/bracket notation
delete user.userId;
delete user["friends"];


// Don't delete. This is used in 4-destructuring.js
module.exports = dictionary;