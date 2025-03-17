const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newRolls: number[] = [...rolls, 11, 12];
// console.log(newRolls);

// Rest Operator
const [a, b, c, ...bakiGula] = newRolls;
console.log(a);
console.log(b);
console.log(c);
console.log(bakiGula);

// Spread of Object
type PersonType = {
  name: string;
  age: number;
  isStudent: boolean;
  salary?: number; //nullable
};

const person1: PersonType = {
  name: "Asif",
  age: 23,
  isStudent: true,
};

const updatedPerson1: PersonType = {
  ...person1,
  salary: 50000,
};
// console.log(updatedPerson1);
