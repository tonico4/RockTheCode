/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa"
];

const swap = (array, firstIndex, secondIndex) => {
  const item1 = array.slice(firstIndex, firstIndex + 1).toString();
  const item2 = array.slice(secondIndex, secondIndex + 1).toString();
  
  array.splice(firstIndex, 1, item2);
  array.splice(secondIndex, 1, item1);
  return array;
}

/* Hacemos los logs sin mutar el array inicial para ver que funciona */
console.log(swap([...fantasticFour], 1, 3)); // "Mr. Fantástico" por "La cosa"
console.log(swap([...fantasticFour], 0, 3)); // "La antorcha humana" por "La cosa"
console.log(swap([...fantasticFour], 2, 1)); // "La mujer invisible" por "Mr. Fantástico"

console.log("---------------");
/* Ahora con el array mutado */
console.log(swap(fantasticFour, 1, 3)); 
console.log(swap(fantasticFour, 0, 3)); 
console.log(swap(fantasticFour, 2, 1)); 