const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  return sumAll(param) / param.length;
}

function sumAll(param) {
  let sum = 0;
  for (num of param) {
    sum += num;
  }

  return sum;
}

console.log(average(numbers));