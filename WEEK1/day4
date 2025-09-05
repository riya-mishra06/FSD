📝 JavaScript Arrays Notes
🔹 1. What is an Array?

Definition: A linear collection of items (values) stored in a single variable.

Arrays in JS are mutable → values can be changed.

Example

let marks = [99, 45, 43, 56, 34];
console.log(marks);

🔹 2. Array is Mutable
let arr = [1,2,3];
arr[0] = 10;  // change first element
console.log(arr); // [10,2,3]


✔️ We can change elements directly.

🔹 3. Adding & Removing Elements
push() → Add at end
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple","banana","mango"]

pop() → Remove from end
let fruits = ["apple","banana","mango"];
let removed = fruits.pop();
console.log(removed); // mango
console.log(fruits);  // ["apple","banana"]

unshift() → Add at start
let nums = [2,3,4];
nums.unshift(1);
console.log(nums); // [1,2,3,4]

shift() → Remove from start
let nums = [1,2,3,4];
let first = nums.shift();
console.log(first); // 1
console.log(nums);  // [2,3,4]

🔹 4. Searching in Array
indexOf() → Returns index of value
let colors = ["red","blue","green"];
console.log(colors.indexOf("blue")); // 1
console.log(colors.indexOf("yellow")); // -1 (not found)

includes() → Checks if value exists
let colors = ["red","blue","green"];
console.log(colors.includes("green")); // true
console.log(colors.includes("yellow")); // false

🔹 5. Joining Arrays
concat() → Merge arrays
let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c); // [1,2,3,4]

🔹 6. Reversing Arrays
reverse()
let nums = [1,2,3];
nums.reverse();
console.log(nums); // [3,2,1]

🔹 7. Extracting Parts
slice(start,end) → Copies portion
let arr = [10,20,30,40,50];
let part = arr.slice(1,4); 
console.log(part); // [20,30,40]
console.log(arr);  // [10,20,30,40,50] (unchanged)

🔹 8. Modifying In-place
splice(start,deleteCount,...items)
let arr = [10,20,30,40,50];

// remove 2 elements from index 1
arr.splice(1,2);
console.log(arr); // [10,40,50]

// add elements
arr.splice(1,0,25,35);
console.log(arr); // [10,25,35,40,50]

🔹 9. Sorting
sort()
let nums = [4,2,10,1];
nums.sort();
console.log(nums); // [1,10,2,4] (string sort, not numeric)

// Correct numeric sort
nums.sort((a,b) => a-b);
console.log(nums); // [1,2,4,10]

🔹 10. Array References

Arrays store values by reference (memory address).

let arr1 = [1,2,3];
let arr2 = arr1;   // same reference
arr2[0] = 99;

console.log(arr1); // [99,2,3]
console.log(arr2); // [99,2,3]


✔️ Changing arr2 also changes arr1 because both point to the same address.

To copy → use slice() or spread [...]

let arr3 = [1,2,3];
let arr4 = arr3.slice(); // copy
arr4[0] = 100;

console.log(arr3); // [1,2,3]
console.log(arr4); // [10
