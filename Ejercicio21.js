const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let teens = [];
let olds = [];

for (user of users) {

  if (user["years"] >= 18) {
    olds.push(user["name"]);
  } else {
    teens.push(user["name"]);
  }
}

console.log("Usuarios menores de edad: " + teens);
console.log("Usuarios mayores de edad: " + olds);