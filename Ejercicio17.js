const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
};

for (key in alien) {
  console.log(key + ": " + alien[key]);
}