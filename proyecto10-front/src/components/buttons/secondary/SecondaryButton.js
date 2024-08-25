import "./secondaryButton.css";

const SecondaryButton = (text, foo) => {
  const button = document.createElement("button");
  button.className = "secondary-btn";
  button.textContent = text;

  button.addEventListener("click", foo);

  return button;
}

export default SecondaryButton;