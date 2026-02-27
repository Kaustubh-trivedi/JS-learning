const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

//appendChild   ---> Cut and Paste
// container.appendChild(h1); //  -> This will take h1 and paste inside container, it is like cut and paste;

// cloneNode  then appendChild      ---> Copy and paste
// container.appendChild(h1.cloneNode())   ///--> This willl just clone h1 tag, not the elements inside it.
// container.appendChild(h1.cloneNode(true))  ///-> This will clone content as well as tag too



//use for loop and create 1 to 100 card.

for (let index = 0; index <= 98; index++) {
    const number = index + 2;
    let newcard = card.cloneNode();
    newcard.innerText = number;
    container.appendChild(newcard);

}


//difference between append and append child
// appendChild return the inside value, append doesn't return anything
// in appendchild we can only append Node while in append we can even append string.

// in append we can append multiple at once while in appendChild only first one is appended.
// h1.append('abc', 'def', "ghi");
// let textNode = document.createTextNode("Heelo")
// h1.appendChild(textNode, card);  //only textNode is considered