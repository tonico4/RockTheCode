// 1.1
const div1 = document.createElement("div");
document.body.appendChild(div1);

// 1.2
const div2 = document.createElement("div");
document.body.appendChild(div2);

const newP = document.createElement("p");
div2.appendChild(newP);

// 1.3
const div3 = document.createElement("div");
document.body.appendChild(div3);


for (let index = 0; index < 6; index++) {
  const newP = document.createElement("p");
  div3.appendChild(newP);
}

// 1.4
const div4 = document.createElement("div");
document.body.appendChild(div4);

const p = document.createElement("p");
const divPText = div4.appendChild(p);
divPText.textContent = "Soy dinámico!";

// 1.5
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;

  ul.appendChild(li);
}

// 1.7
const removeItem = document.querySelectorAll(".fn-remove-me");
for (const child of removeItem) {
  document.body.removeChild(child);
}

// 1.8
const allDiv = document.querySelectorAll("div");
const midP = document.createElement("p");
midP.textContent = "Voy en medio!";

const secondDiv = allDiv[1];
document.body.insertBefore(midP, secondDiv);

// 1.9
const insertDiv = document.querySelectorAll(".fn-insert-here");

for (const div of insertDiv) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";

  div.appendChild(p);
}