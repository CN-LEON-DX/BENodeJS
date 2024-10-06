// type void for function that do not return any value
const helloMan = (): void => {
  console.log("Hello World");
};

helloMan();

// 2. Generic
// Generic is a way to create reusable components
// Generic is a type that is defined with a type parameter

// EX reverse function

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

console.log(reverse([1, 2, 3, "3", 5]));

// Union Type
// Union type is a way to combine two or more types
// Union type is a type that can hold values of two or more types

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Product {
  id: String,
  title: String,
  price: Number,
  rate: Number | String,
  status: "active" | "inactive" | "pending",
}
