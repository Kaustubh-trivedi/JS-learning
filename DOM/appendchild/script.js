const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

//appendChild   ---> Cut and Paste
container.appendChild(h1); //  -> This will take h1 and paste inside container, it is like cut and paste;

// cloneNode  then appendChild      ---> Copy and paste
container.appendChild(h1.cloneNode())