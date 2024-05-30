import data from '../../data/user';
import './About.css';

export const About = () => {
  const about = document.createElement("section");
  about.className = "about";

  const aboutMe = document.createElement("p");
  aboutMe.textContent = data.aboutMe;
  about.append(aboutMe);

  return about;
}