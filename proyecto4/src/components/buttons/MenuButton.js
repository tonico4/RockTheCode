import "./MenuButton.css";

const clearSelectedButton = () => {
  const selectedButton = document.querySelector("button.selected");
  selectedButton.classList.remove("selected");
}

const renderView = (view) => {
  const container = document.getElementById("viewcontainer");
  container.innerHTML = ``;
  container.append(view);
};

export const MenuButton = (text, id, view) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = "menubtn";
  button.id = id;
  button.addEventListener("click", () => {
    clearSelectedButton();
    button.classList.add("selected");
    renderView(view)
  });
  
  if (id === "about") button.classList.add("selected");

  return button;
};
