// 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
console.log(10 * 5);

// 1.2 Divide 10 por 2 y muestra el resultado en un console.
console.log(10 / 2);

// 1.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log(15 % 9);

/** 
1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.
*/
let o = 15;
let p = 10;
let j = 5;

function getOperator(num1, num2, result) {
  const sign = ["+", "-", "*", "/", "%"];
  for (let i in sign) {
    switch(sign[i]) {
      case "+":
        if (num1 + num2 === result) {
          console.log("El signo + es el operador correcto.")
        }
        break;
      case "-":
        if (num1 - num2 === result) {
          console.log("El signo - es el operador correcto.")
        }
        break;
      case "*":
        if (num1 * num2 === result) {
          console.log("El signo * es el operador correcto.")
        }
        break;
      case "/":
        if (num1 / num2 === result) {
          console.log("El signo / es el operador correcto.")
        }
        break;
      case "%":
        if (num1 % num2 === result) {
          console.log("El signo % es el operador correcto.")
        }
        break;
    };
  };
};

getOperator(p, j, o);

/**
1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.
*/
let i = 50;
let c = 10;
let m = 5;

getOperator(c, m, i);