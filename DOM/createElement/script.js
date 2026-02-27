
const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const image_ = document.querySelector('img');

// for (let index = 0; index < 99; index++) {
//     let createNode = image_.cloneNode();
//    createNode.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
// //    console.log(createNode)
//    container.appendChild(createNode)
// }


// using createElement

for (let index = 0; index < 100; index++) {
    let img = document.createElement('img');
    const image_src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
    img.src =  image_src;
    img.classList.add("poke-img");
    img.classList.add(`poke-${index}`);
    img.setAttribute("id",`poke-${index+1}`)
    container.appendChild(img);
}