var hello = "Hello, World! ";
console.log(hello);

// why we need typescript?
// 1. Typescript is a strongly typed language

let a = 10;
const b = 5;

console.log(a + b);

// interface
interface Social {
  zalo?: string;
  facebook?: string;
}

interface User {
  fullName: string;
  email: string;
  age?: number; // optional
  social?: {
    social: Social;
  };
}

let user: User = {
  fullName: "John Doe",
  email: "doe",
  social: {
    social: {
      zalo: "zalo",
      facebook: "facebook",
    },
  },
};

// extend interface
interface Admin extends User {
  role: string;
}

//- array
const array: number[] = [];
array.push(1);

console.log(array);

// multiple tyope in array
const array2: (string | number)[] = [];
// array with interface
const array3: User[] = [];

// using interface in function
let inforUser: [string, number, boolean];

inforUser = ["John Doe", 30, true];

let clock: [number, number, number] = [12, 30, 60];
const [hour, minute, second] = clock;

console.log(hour, minute, second);

// Readonly
// just read, can't change

let arr: readonly number[] = [1, 2, 3];
let arr2: ReadonlyArray<number> = [1, 2, 3];

// using it inside intertace
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 5; // error

// arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// declare function
function sum(a: number, b: number): number {
  return a + b;
}
// expression function
const sum2 = function (a: number, b: number): number {
  return a + b;
};

// default parameter
function multiply(a: number = 11, b: number = 10): number {
  return a * b;
}
console.log(multiply(4));

// optional parameter
function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

console.log(fullName("John"));

// rest parameter
// declare rest parameter by using ...
// rest parameter must be the last parameter12q
function addNumber(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

console.log(addNumber(1, 2, 3, 4, 5));

// ENUM
// Enum is a way to create a group of named constants
// enum is a type that specifies a set of named constants called enumerators
// enum is a collection of related values that can be numeric or string values
// enum is a keyword in typescript
// it readonly by default
enum Direction {
  Up,
  Down = 5,
  Left,
  Right,
}

// enum Direction {
//     Up = 1,    // explicitly assigned to 1
//     Down,      // automatically assigned to 2 (1 + 1)
//     Left,      // automatically assigned to 3 (2 + 1)
//     Right,     // automatically assigned to 4 (3 + 1)
//   }

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

// Type any 
// EX
let at: any = 4;
let atc: (string | number | boolean) = 4;
at = "hello";
at = false;


// Type unknown
// unknown is a type-safe counterpart of any
// unknown is a type that represents any value
// safety is the main difference between unknown and any
let userInput: unknown;
let userName: string;


// void function 
// void is a type that represents the absence of a value
// void is used on function that do not return a value