const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const ul = document.createElement("ul");
const div = document.querySelector("div[data-function]");
div.appendChild(ul);

for (const place of places) {
  const li = document.createElement("li");
  li.textContent = place;

  ul.appendChild(li);
}