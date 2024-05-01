const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let small = [];
let medium = [];
let big = [];

for (movie of movies) {
  if (movie["durationInMinutes"] > 200) {
    big.push(movie["name"]);
  } else if (movie["durationInMinutes"] < 100) {
    small.push(movie["name"]);
  } else {
    medium.push(movie["name"]);
  }
}

console.log("Películas pequeñas: " + small)
console.log("Películas medianas: " + medium)
console.log("Películas grandes: " + big)