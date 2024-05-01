const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
  // Clave valor -> {palabra: repeticiones}
  let dictionary = {};

  for (word of param) {
    if (!dictionary[word]) {
      dictionary[word] = 1;
    } else {
      dictionary[word]++;
    }
  }

  return dictionary;
}

console.log(repeatCounter(counterWords));