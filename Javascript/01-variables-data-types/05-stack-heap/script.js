// Value is stored in the stack
const name = 'John';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'Brad',
  age: 40,
};

const person1 = {
  name: 'Brad',
  age: 40,
};

const perso2n = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Angel';

let newPerson = person;
newPerson.name = 'Olvera';

console.log(name, newName);
console.log(person, newPerson); 