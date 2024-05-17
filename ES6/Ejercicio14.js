/* Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random() */

const rollDice = (faces) => {
  return Math.floor(Math.random() * faces + 1); // +1 porque puede salir 0 como resultado
}

console.log(rollDice(5));
console.log(rollDice(10));
console.log(rollDice(6));
console.log(rollDice(6));