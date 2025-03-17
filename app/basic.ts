import { ArrayExpression } from "./../node_modules/acorn/dist/acorn.d";
//Basic Data type
const Name: string = "Asif Talukder";
const age: number = 23;
const isStudent: boolean = true;

// Array
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// tupple
const info: [string, string, number, boolean, null] = [
  "Asif",
  "Atik",
  2021,
  true,
  null,
];

// Object
const person: {
  name: string;
  age: number;
  isStudent: boolean;
  address: string;
} = {
  name: "Asif",
  age: 23,
  isStudent: true,
  address: "123 Main St, New York",
};

type StudentType = {
  name: string;
  age: number;
  isStudent: boolean;
  id: string;
  batch: number;
};

const student1: StudentType = {
  name: "Asif",
  age: 23,
  isStudent: true,
  id: "123",
  batch: 2021,
};
const student2: StudentType = {
  name: "Rita",
  age: 21,
  isStudent: false,
  id: "456",
  batch: 2022,
};

// normal function
function multipy(num1: number, num2: number): number {
  const result: number = num1 * num2;
  return result;
}
console.log(multipy(2, 4));

// Array Function
const twoSum = (a: number, b: number): number => {
  return a + b;
};
console.log("sum = " + twoSum(2, 4));
