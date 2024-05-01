const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  return sumAll(param) / param.length;
}

function sumAll(param) {
  let sum = 0;
  for (num of param) {
    if (typeof num == "string") {
      sum += num.length;
    } else {
      sum += num;
    }
  }

  return sum;
}

console.log(averageWord(mixedElements).toFixed(2));