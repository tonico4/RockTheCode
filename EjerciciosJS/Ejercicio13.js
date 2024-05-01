const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(array, name) {
  if (array.includes(name)) {
    console.log(`${name} está en la posición: ${array.indexOf(name)}`);
    return true;
  } else {
    console.log(`${name} no está en la lista.`);
    return false;
  }
}

finderName(nameFinder, "Xabier");