//What is scope?
// A scope is a certain region where a defined variable exists and can be recognized
//global, block ,function scope


//var is functional scoped where let and const are block scoped
{ var a = 5 }
console.log(a) //var is still accessible outside the block


{let b=5}
console.log(b)  // Reference error -> b is not defined.

//-------------------------------------------------------------------------------------------------------------------

//Variable shadowing
// Variable shadowing happens when a variable declared inside a certain scope (like a function or block) has the same name as a variable in an outer scope. The inner variable “shadows” (hides) the outer one within its scope.


// 🔹 Example with let
let count = 10;

function showCount() {
  let count = 5; // shadows outer `count`
  console.log(count);
}

showCount(); // 5
console.log(count); // 10
// ✅ Why?
// The inner count exists only inside showCount.
// It hides the outer count inside the function.
// Outside the function, the original count is unchanged.

// 🔹 Example with Block Scope
let name = "Alice";
if (true) {
    let name = "Bob"; // shadows outer `name`
    console.log(name); // Bob
}

console.log(name); // Alice     //let and const are block-scoped, so shadowing works inside {} blocks.

// 🔹 Example with var
var x = 1;

function test() {
    var x = 2; // shadows outer `x`
    console.log(x); // 2
}

test();
console.log(x); // 1
// ⚠️ var is function-scoped, not block-scoped.


// 🔹 Illegal Shadowing
// Shadowing can cause errors when mixing let and var.
let y = 10;
{
  var y = 20; // ❌ SyntaxError
}
// ❓ Why?
// let is block-scoped.
// var tries to redeclare it in the same function/global scope.
// JavaScript does not allow this conflict.

// 🔹 Shadowing in Loops
let i = 100;

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

console.log(i); // 100
// The loop variable shadows the outer i.




//---------------------------------------------------------------------------------------------------------------