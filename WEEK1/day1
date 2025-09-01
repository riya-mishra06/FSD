1. Console in JavaScript

The console is used to test and debug code.
console.log() is a simple way to print messages, variables, or results in the browser console.

Examples:
console.log("Riya");             
console.log("Hello World");      
let num = 25;
console.log("Riya", "Heyy", num, 123); 
<!-- // prints Riya Heyy 25 123 -->


👉 Open the browser console (F12 → Console tab) to see the output.

2. Linking JS File to HTML

We can connect JavaScript to an HTML page using the <script> tag.

Example:
<!DOCTYPE html>
<html>
<head>
  <title>JS Linking</title>
</head>
<body>
  <h1>Hello from HTML</h1>

  <script src="script.js"></script>
</body>
</html>


Here, script.js is your external JS file.

3. Template Literals (Backticks ``)

Template literals allow embedding expressions or variables inside strings using ${}.

Example:
let name = "Riya";
let age = 24;

console.log(`My name is ${name} and I am ${age} years old.`);
<!-- // Output: My name is Riya and I am 24 years old. -->

4. Operators in JavaScript
🔹 Arithmetic Operators

Used for calculations.
+ , - , * , / , %

let x = 10, y = 3;
console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
console.log(x % y); // 1

🔹 Unary Operators

Increment or decrement values.
++ , --

let a = 5;
a++;   // increment
console.log(a); // 6

a--;   // decrement
console.log(a); // 5

🔹 Assignment Operators

Used to assign values.
= , += , -= , *= , /=

let b = 10;
b += 5; // b = b + 5
console.log(b); // 15

🔹 Comparison Operators

Used to compare values.
== , === , != , !== , > , < , >= , <=

console.log(5 == "5");   // true (only checks value)
console.log(5 === "5");  // false (checks value + type)
console.log(10 > 5);     // true


👉 Comparison for Non-Numbers

console.log('a' > 'A'); // true (based on Unicode values)

🔹 Logical Operators

Used to combine expressions.
&& (AND) , || (OR) , ! (NOT)

let age = 20;
let hasID = true;

console.log(age > 18 && hasID); // true
console.log(age > 25 || hasID); // true
console.log(!hasID);            // false

5. Conditional Statements
🔹 if-else

Executes a block based on condition.

let age = 18;
if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

🔹 else-if ladder

Checks multiple conditions.

let size = "L";

if (size === "XL") {
    console.log("Rupees is 250");
}
else if (size === "L") {
    console.log("Rupees is 200");
}
else if (size === "M") {
    console.log("Rupees is 100");
}
else if (size === "S") {
    console.log("Rupees is 50");
}
else {
    console.log("NOT AVAILABLE");
}


✅ Output: Rupees is 200

🔹 Nested if-else

When you write if-else inside another if-else.

let marks = 85;

if (marks >= 50) {
    if (marks >= 80) {
        console.log("Grade: A");
    } else {
        console.log("Grade: B");
    }
} else {
    console.log("Fail");
}


✅ Output: Grade: A

🔹 Switch Statement

Alternative to multiple if-else conditions.

let day = 3;

switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}


✅ Output: Wednesday