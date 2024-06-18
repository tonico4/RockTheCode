import data from '../../data/user';
import './Projects.css';

export const Projects = () => {
  const projects = document.createElement("section");
  projects.className = "projects";

  for (const project of data.projects) {
    const container = document.createElement("article");
    container.className = "projectcontainer";

    const h3 = document.createElement("h3");
    h3.textContent = project.title;

    const projectcard = createProjectCard(project.preview, project.link, project.description);

    container.append(h3, projectcard);
    projects.append(container);
  }

  return projects;
}

const createProjectCard = (url, href, text) => {
  const card = document.createElement("div");
  card.className = "projectcard";

  const preview = document.createElement("img");
  preview.src = url;

  const modal = document.createElement("div");
  modal.className = "modal";

  const a = document.createElement("a");
  a.href = href;
  a.textContent = "Ver en Github";

  const description = document.createElement("p");
  description.textContent = text;

  modal.append(a, description);
  card.append(preview, modal);

  return card;
}