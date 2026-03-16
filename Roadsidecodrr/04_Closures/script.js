// Write a function that will allow you to do this

var addSix = createBase(6);

addSix(10) // returns 16
addSix(21) // returns 27


// Solution
function createBase(a) {
  return function (b) {
    return a + b;
  }
}


//print 0 1 2 3 using var in loops
for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
// 4 4 4 4


//print 0 1 2 3 using var in loops
for (var i = 0; i < 4; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
  inner(i)
}

//  0 1 2 3



//caching memoizatoin using closure
function clumsyCalculation(num1, num2) {
  for (let index = 0; index < 1000000000; index++) { }
  return num1 * num2
};

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(argsCache);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this,...args)
    } else {
      return res[argsCache]
    }
  }

}

const memoizedClumsyCalculation = myMemoize(clumsyCalculation)

console.time("First");
// clumsyCalculation(5, 6);
console.log(memoizedClumsyCalculation(5,6))
console.timeEnd("First")

console.time("Second");
// clumsyCalculation(5, 6);
console.log(memoizedClumsyCalculation(5,6))
console.timeEnd("Second")
