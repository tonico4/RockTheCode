import { About } from '../../views/about/About';
import { Contact } from '../../views/contact/Contact';
import { Education } from '../../views/education/Education';
import { Experience } from '../../views/experience/Experience';
import { Skills } from '../../views/skills/Skills';
import { Projects } from '../../views/projects/Projects';
import { MenuButton } from '../buttons/MenuButton';
import './Menu.css';

const sections = [
  {
    sectionName: "About me",
    sectionView: About(),
    id: "about"
  },
  {
    sectionName: "Education",
    sectionView: Education(),
    id: "education"
  },
  {
    sectionName: "Work Experience",
    sectionView: Experience(),
    id: "experience"
  },
  {
    sectionName: "Skills",
    sectionView: Skills(),
    id: "skills"
  },
  {
    sectionName: "Projects",
    sectionView: Projects(),
    id: "projects"
  },
  {
    sectionName: "Contact",
    sectionView: Contact(),
    id: "contact"
  }
];

export const Menu = () => {
  const menu = document.createElement("div");
  menu.className = "menu";

  for (const section of sections) {
    menu.append(MenuButton(section.sectionName, section.id, section.sectionView));
  }

  return menu;
}