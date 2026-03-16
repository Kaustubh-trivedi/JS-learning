// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, i * 1000)
// };

// output  ==> 0,1,2,3,4 (in one second interval)


for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
};

// output  ==> 5,5,5,5,5 (in one second interval)


function sum() {
  console.log(arguments);
}
sum(1, 3, 5, 6);   // [1,3,5,6]

let a = [1, 2, 3]
let b = [4, 5, 6]
let combinedArr = [...a, ...b];
console.log(combinedArr) // [1, 2, 3, 4, 5, 6]


function sum2(...args) { //rest
  console.log(args)
}

sum2(...combinedArr)  //spread

