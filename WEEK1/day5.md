📝 JavaScript Loops Notes
🔹 1. For Loop

Syntax

for(initialization; condition; update){
    // code to repeat
}


Example: Print numbers 1 to 5

for(let i=1; i<=5; i++){
    console.log(i);
}


Explanation (Dry Run)

Step 1 → i=1, condition 1<=5 ✅ → print 1 → update i=2

Step 2 → i=2, condition 2<=5 ✅ → print 2 → update i=3

Step 3 → i=3, condition 3<=5 ✅ → print 3 → update i=4

Step 4 → i=4, condition 4<=5 ✅ → print 4 → update i=5

Step 5 → i=5, condition 5<=5 ✅ → print 5 → update i=6

Step 6 → i=6, condition 6<=5 ❌ → loop ends

🔹 2. While Loop

Syntax

while(condition){
    // code
}


Example: Print numbers 1 to 5

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}


Dry Run

Step 1 → i=1 ✅ → print 1 → i=2

Step 2 → i=2 ✅ → print 2 → i=3

Step 3 → i=3 ✅ → print 3 → i=4

Step 4 → i=4 ✅ → print 4 → i=5

Step 5 → i=5 ✅ → print 5 → i=6

Step 6 → i=6 ❌ → loop ends

🔹 3. Do-While Loop

Syntax

do {
    // code
} while(condition);


Example: Print numbers 1 to 5

let i = 1;
do {
    console.log(i);
    i++;
} while(i <= 5);


Dry Run

Step 1 → executes once i=1 → print 1 → i=2

Step 2 → condition 2<=5 ✅ → print 2 → i=3

Step 3 → print 3 → i=4

Step 4 → print 4 → i=5

Step 5 → print 5 → i=6

Step 6 → condition 6<=5 ❌ → stops

👉 Difference: do-while runs at least once, even if condition is false.

🔹 4. Even & Odd Numbers
for(let i=1; i<=10; i++){
    if(i % 2 === 0){
        console.log(i, "is Even");
    } else {
        console.log(i, "is Odd");
    }
}


Explanation

% gives remainder

If remainder = 0 → Even

Else → Odd

🔹 5. Multiplication Table
let num = 5;
for(let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}


Dry Run for num=5

5 × 1 = 5

5 × 2 = 10

...

5 × 10 = 50

🔹 6. Nested Loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(`i=${i}, j=${j}`);
    }
}


Explanation

Outer loop runs 3 times (i=1 to 3)

For each i, inner loop runs 3 times (j=1 to 3)

Total prints = 3 × 3 = 9

🔹 7. Break Keyword
for(let i=1; i<=10; i++){
    if(i === 5){
        console.log("Breaking at", i);
        break;
    }
    console.log(i);
}


Dry Run

Prints 1,2,3,4

When i=5 → breaks → loop stops

🔹 8. Continue Keyword
for(let i=1; i<=5; i++){
    if(i === 3){
        continue; // skip this iteration
    }
    console.log(i);
}


Dry Run

Prints 1,2,4,5 (skips 3)

🔹 9. Loop with Array
let fruits = ["apple", "banana", "mango"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

🔹 10. For-of Loop (Simpler)
let colors = ["red", "blue", "green"];
for(let c of colors){
    console.log(c);
}

🔹 11. Nested Array Example
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];


for(let row of matrix){
    for(let val of row){
        console.log(val);
    }
}


Output → 1 2 3 4 5 6 7 8 9

