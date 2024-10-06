var hello = "Hello, World! ";
console.log(hello);
let a = 10;
const b = 5;
console.log(a + b);
let user = {
    fullName: "John Doe",
    email: "doe",
    social: {
        social: {
            zalo: "zalo",
            facebook: "facebook",
        },
    },
};
const array = [];
array.push(1);
console.log(array);
const array2 = [];
const array3 = [];
let inforUser;
inforUser = ["John Doe", 30, true];
let clock = [12, 30, 60];
const [hour, minute, second] = clock;
console.log(hour, minute, second);
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
let point = { x: 10, y: 20 };
const add = (a, b) => {
    return a + b;
};
function sum(a, b) {
    return a + b;
}
const sum2 = function (a, b) {
    return a + b;
};
function multiply(a = 11, b = 10) {
    return a * b;
}
console.log(multiply(4));
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("John"));
function addNumber(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log(addNumber(1, 2, 3, 4, 5));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 5] = "Down";
    Direction[Direction["Left"] = 6] = "Left";
    Direction[Direction["Right"] = 7] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
let at = 4;
let atc = 4;
at = "hello";
at = false;
let userInput;
let userName;
