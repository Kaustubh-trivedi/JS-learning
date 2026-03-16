
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
// console.log(input)
const handleInput = debouce(function (e) { console.log(e.target.value) }, 500);
// input.addEventListener("input", handleInput);


//procodrr
const inputProcodrr = document.querySelector(".procodrr");

const handleInput2 = (e) => {
    console.log(e.target.value);
}

const debouce2 = (fn, wait) => {
    let timer;
    return function (...args) {
        if (timer) { clearTimeout(timer) }
         timer = setTimeout(() => {
            fn(...args)
        }, wait)
    }
}

const apiCall = debouce2(handleInput2, 1000)

inputProcodrr.addEventListener('input', apiCall)



// REACT CODE
// import React, { useState, useMemo } from 'react';
// import './style.css';

// export default function App() {
//   let [input, setInput] = useState('');
//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };
//   const debounce = (fn, wait) => {
//     let timer;
//     return function (e) {
//       if (timer) {
//         clearTimeout(timer);
//       }
//       timer = setTimeout(() => {
//         fn(e);
//       }, wait);
//       // fn(e);
//     };
//   };
//   const apicall = useMemo(() => debounce(handleChange, 1000), []);
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => {
//           setInput(e.target.value);
//           apicall(e);
//         }}
//       />
//     </div>
//   );
// }
