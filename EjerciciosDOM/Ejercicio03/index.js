// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;

  ul.appendChild(li);
}

// 1.2
const remove = document.querySelector(".fn-remove-me");
document.body.removeChild(remove);

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector("div[data-function]");
const ul2 = document.createElement("ul");

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;

  ul2.appendChild(li);
}

printHereDiv.appendChild(ul2);

// 1.4
const countriesImgList = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const image of countriesImgList) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");

  h4.textContent = image.title;
  img.src = image.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  document.body.appendChild(div);
}

// 1.5
const btn = document.createElement("button");

const removeLastItem = () => {
  const list = document.querySelectorAll("div");
  const lastItem = list[list.length - 1];

  document.body.removeChild(lastItem);
  console.log("Eliminado")
}

btn.textContent = "Remove Last";
btn.addEventListener("click", removeLastItem);

document.body.appendChild(btn);

// 1.6
const listOfDivs = document.querySelectorAll("div");

const removeMe = () => {
  const selected = document.querySelector(".selected");
  document.body.removeChild(selected);
}

for (const div of listOfDivs) {
  const btn = document.createElement("button");
  btn.addEventListener("click", removeMe);
  btn.textContent = "Remove me";

  div.addEventListener("mouseover", () => {
    div.classList.add("selected");
  });
  div.addEventListener("mouseleave", () => {
    div.classList.remove("selected");
  });

  div.appendChild(btn);
}