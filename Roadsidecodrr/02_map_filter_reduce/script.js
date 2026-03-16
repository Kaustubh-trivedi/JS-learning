const nums = [1, 2, 3, 4, 5];

const mappedArr = nums.map((value, index, nums) => { return 3 * value });
console.log(mappedArr);


//pollyfill for map
Array.prototype.mymap = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    let result = cb(this[i], i, this);
    tempArr.push(result);
  };
  return tempArr;
}

const mymappedArr = nums.mymap((value, index, nums) => { return 3 * value });
console.log("MyMap", mymappedArr);


const filteredArr = nums.filter((value, index, nums) => { return value >= 3 })
console.log(filteredArr);

Array.prototype.myFilter = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      tempArr.push((this[i]))
    }
  };
  return tempArr;
}


const myfilteredArr = nums.myFilter((value, index, nums) => { return value >= 3 })
console.log(myfilteredArr);




const reducedArr = nums.reduce((accumulator, currentValue, index, arr) => {
  return accumulator + currentValue
}, 0);
console.log(reducedArr)

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator;
  if (initialValue) { accumulator = initialValue } else { accumulator = this[0] };

  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this)
  }
  return accumulator;
}

const myreducedArr = nums.myReduce((accumulator, currentValue, index, arr) => {
  return accumulator + currentValue
}, 0);
console.log(myreducedArr)