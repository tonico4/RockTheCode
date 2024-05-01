// 1.1
console.log(document.querySelector(".showme"));

// 1.2
console.log(document.querySelector("h1#pillado"));

// 1.3
const allP = document.querySelectorAll("p");
for (const p of allP) {
  console.log(p);
}

// 1.4
const allPokemon = document.querySelectorAll(".pokemon");
for (const element of allPokemon) {
  console.log(element);
}

// 1.5
const allElements = document.querySelectorAll("[data-function]");
for (const element of allElements) {
  console.log(element);
}

// 1.6
console.log(allElements[2]);