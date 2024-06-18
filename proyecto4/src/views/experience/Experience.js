import data from '../../data/user';
import './Experience.css';

export const Experience = () => {
  const experience = document.createElement("section");
  experience.className = "experience";

  for (const work of data.workExperience) {
    const workCard = createInfoCard(work.position, work.company, work.startDate, work.endDate, work.description);
    experience.append(workCard);
  }

  return experience;
}

const createInfoCard = (position, company, stardate, endDate, description) => {
  const card = document.createElement("div");
  card.className = "infocard";

  const infoPosition = document.createElement("h2");
  infoPosition.textContent = position;

  const infoCompany = document.createElement("h3");
  infoCompany.textContent = company;

  const date = document.createElement("span");
  date.textContent = `${stardate} - ${endDate}`;

  const infoDescription = document.createElement("p");
  infoDescription.textContent = description;

  card.append(infoPosition, infoCompany, date, infoDescription);

  return card;
}