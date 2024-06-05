import data from '../../data/user';
import "./Education.css";

export const Education = () => {
  const educationCard = createEducationCard(
    data.education.degree,
    data.education.university,
    data.education.graduationYear,
    data.education.courses
  );

  return educationCard;
};

const createEducationCard = (
  degree,
  university,
  graduationYear,
  coursesList
) => {
  const educationCard = document.createElement("section");
  educationCard.className = "educationcard";

  const h3 = document.createElement("h3");
  h3.textContent = degree;

  const school = document.createElement("i");
  school.textContent = `${university} - ${graduationYear}`;

  const courses = document.createElement("ul");

  for (const course of coursesList) {
    const li = document.createElement("li");
    li.textContent = `# ${course}`;
    courses.append(li);
  }

  educationCard.append(h3, school, courses);

  return educationCard;
};
