import { printSearch } from "../../main";
import "./SuggestionButton.css";

export const SuggestionButton = (text) => {
  const button = document.createElement("button");
  button.className = "suggestionbutton";

  button.textContent = text;
  button.addEventListener("click", async () => {
    await printSearch(text);
  });
  return button;
};
