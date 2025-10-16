// Update this function to use object shorthand notation!

const makeUser = (name, age) => {
  const newUser = {
    "name": name,
    "age": age,
    "isAdmin": false,
    "friends": [],
  }
  return newUser;
}

const user1 = makeUser('ben', 30);

console.log(`${user1.name} is ${user1.age} years old.`);