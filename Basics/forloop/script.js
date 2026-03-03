// for (var a = 0; a <= 3; a++) {
//     setTimeout(() => { 
//         console.log(a) }, a)
// }

// for (let a = 0; a <= 3; a++) {
//     setTimeout(() => { 
//         console.log(a) }, a)
// }

for (var i = 1; i <= 5; i++) {
  (function(current) {
    setTimeout(function() {
      console.log(current);
    }, current * 1000);
  })(i);
}
//or
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function(iCopy) {
//     console.log(iCopy);
//   }, i * 1000, i);
// }