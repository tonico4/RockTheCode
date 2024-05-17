/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. */

/* Haz varios ejemplos y compruebalos. */

/* Sugerencia de función:
function findArrayIndex(array, text) {} */

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const findArrayIndex = (array, text) => {
  return array.includes(text) ? array.indexOf(text) + 1 : "No se ha encontrado el texto";
}

console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Juan"));
console.log(findArrayIndex(mainCharacters, "Luke"));