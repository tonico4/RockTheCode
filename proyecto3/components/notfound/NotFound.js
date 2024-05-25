import { SuggestionButton } from '../button/SuggestionButton';
import './NotFound.css';

export const NotFound = () => {
  const div = document.createElement("div");
  div.className = "not-found";

  const p = document.createElement("p");
  p.textContent = "No se ha encontrado ninguna imagen, pruebe con estas sugerencias:";

  div.append(p);
  div.append(SuggestionButton("Nube"));
  div.append(SuggestionButton("Paisaje"));
  div.append(SuggestionButton("Deporte"));

  return div;
}