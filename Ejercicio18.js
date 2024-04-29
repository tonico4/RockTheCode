const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (place of placesToTravel) {
  if (place["id"] === 11 || place["id"] === 40) {
    placesToTravel.splice(placesToTravel.indexOf(place), 1);
  }
}

console.log(placesToTravel);