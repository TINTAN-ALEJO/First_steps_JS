const parent = document.getElementById("parent");
console.log(parent);

const children = parent.children;
console.log(children);

const firstChild = parent.firstElementChild;
console.log(firstChild);

const lastChild = parent.lastElementChild;
console.log(lastChild);

const anotherChild = parent.children[1];
console.log(anotherChild);

const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

const nextSibling = parent.nextElementSibling;
console.log(nextSibling);


//Métodos para seleccionar elementos del DOM.

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

console.log("___________________________________________________________________")

const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);


// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado