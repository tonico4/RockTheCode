import { About } from '../../views/about/About';
import { Projects } from '../../views/projects/Projects';
import './ViewContainer.css';

export const ViewContainer = (view = Projects()) => {
  const container = document.createElement("div");
  container.className = "viewcontainer";
  container.id = "viewcontainer";
  container.append(view);

  return container;
}
