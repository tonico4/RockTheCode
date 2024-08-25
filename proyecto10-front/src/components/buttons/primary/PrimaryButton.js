import "./primaryButton.css";

const PrimaryButton = (text, foo) => {
  const button = document.createElement("button");
  button.className = "primary-btn";
  button.textContent = text;

  button.addEventListener("click", foo);

  return button;
}

export default PrimaryButton;