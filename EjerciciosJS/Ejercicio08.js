const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function countLetters(word) {
  return word.length;
}

function findLongestWord(param) {
  let longestWord = "";
  let maxLength = 0;
  for (let word of param) {
    let actualLength = countLetters(word);
    if (actualLength > maxLength) {
      maxLength = actualLength;
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord(avengers))