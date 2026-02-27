// let firstHone =  document.querySelector("p");
// console.log(firstHone.innerHTML);

// let getProcodrrSelector = document.querySelector('[procodrr=Home]');
// console.log(getProcodrrSelector.getAttribute('class'));


let allA = document.querySelectorAll('a');
// console.log(allA);
for (let index = 0; index < allA.length; index++) {
    const element = allA[index];
    element.style.color = "hotpink"
}

const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
console.log(h1);