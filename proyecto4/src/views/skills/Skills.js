import data from '../../data/user';
import './Skills.css';

export const Skills = () => {
  const skills = document.createElement("section");
  skills.className = "skills";

  const h2 = document.createElement("h2");
  h2.textContent = "MY SKILLS";

  const board = document.createElement("div");
  board.className = "board";
  skills.append(h2, board);

  for (const skill of data.skills) {
    board.append(createTag(skill));
  }

  return skills;
}

const createTag = (text) => {
  const tag = document.createElement("div");
  tag.className = "tag";

  const tagname = document.createElement("span");
  tagname.textContent = text;

  const bgimg = document.createElement("img");
  bgimg.src = "../../../assets/papel.png";

  tag.append(tagname, bgimg);

  return tag;
}