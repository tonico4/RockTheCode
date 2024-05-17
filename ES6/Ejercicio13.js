/* Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente. */

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
  return array.includes(text) ? array.indexOf(text) : "No se ha encontrado el texto";
}

const removeItem = (array, text) => {
  const index = findArrayIndex(array, text);
  if (typeof index !== "number") {
    return index;
  }
  array.splice(index, 1);
  return array;
}

console.log(removeItem(mainCharacters, "Leia"));
console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Juan"));
console.log(removeItem(mainCharacters, "Luke"));