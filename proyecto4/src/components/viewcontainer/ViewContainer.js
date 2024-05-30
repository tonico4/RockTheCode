import { About } from '../../views/about/About';
import './ViewContainer.css';

export const ViewContainer = (view = About()) => {
  const container = document.createElement("div");
  container.className = "viewcontainer";
  container.id = "viewcontainer";
  container.append(view);

  return container;
}
