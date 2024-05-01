const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(param) {
  let array = param;
  for (word of array) {
    if (array.indexOf(word) !== array.lastIndexOf(word)) {
      array.splice(array.indexOf(word), 1)
    }
  }

  return array;
}

console.log("Este es el array original:")
console.log(duplicates);
console.log("--------------------------");
console.log("Este es el array sin duplicados:")
console.log(removeDuplicates(duplicates));