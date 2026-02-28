
// Debouncing ensures a function only runs after a certain amount of time has passed since the last event.
// Throttling ensures a function runs at most once every specified time interval, no matter how many times the event fires.

////CHATGPT RESPONSE
// function debounce(func, delay) {
//     let timeout;
//   return function(...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//         func.apply(this, args);
//     }, delay);
// };
// }

// function throttle(func, limit) {
//     let lastCall = 0;
//     return function(...args) {
//         const now = Date.now();
//         if (now - lastCall >= limit) {
//             lastCall = now;
//             func.apply(this, args);
//         }
//     };
// }
////CHATGPT RESPONSE



///input deboucnce
// function debounce(func, delay) {
//   let timeout;

//   return function (...args) {
//     clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// const input = document.getElementById("searchInput");

// const handleInput = debounce(function (event) {
//   console.log(event.target.value);
// }, 500);

// input.addEventListener("input", handleInput);


function debouce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => { func.apply(this, args) }, delay)
    }
};
const input = document.getElementById("searchInput");
console.log(input)
const handleInput = debouce(function (e) { console.log(e.target.value) }, 500);
input.addEventListener("input", handleInput);


