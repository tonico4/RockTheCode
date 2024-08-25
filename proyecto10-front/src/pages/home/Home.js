import Paragraph from '../../components/paragraphs/Paragraph';
import "./home.css";

const description = [
  "¡Bienvenido a Eventopía, tu portal hacia un mundo de experiencias inolvidables! Aquí, la diversión y la conexión se encuentran en un solo lugar. Descubre una cuidada selección de eventos que van desde conciertos vibrantes y exposiciones artísticas hasta talleres creativos y actividades al aire libre.",
  "En Eventopía, creemos que cada evento es una oportunidad para crear recuerdos y conocer a personas increíbles. ¿Listo para sumergirte en la aventura? Regístrate y sé el primero en enterarte de lo que está por venir. Con nuestra plataforma, planificar tu próxima salida nunca ha sido tan fácil y emocionante.",
  "No dejes que la rutina te atrape. ¡Explora, disfruta y vive al máximo con Eventopía! Tu próxima gran experiencia te está esperando."
];

const Home = () => {
  const home = document.createElement("div");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  const auth = document.createElement("div");

  home.className = "home";

  // HEADER
  h1.textContent = "Eventopía";
  header.append(h1);

  // MAIN
  section.className = "description";

  for (const text of description) {
    const p = Paragraph(text);
    section.append(p);
  }

  auth.className = "authContainer";

  main.append(section, auth);

  // FOOTER
  const copy = Paragraph("@tonicodev - 2024 Eventopía.");
  footer.append(copy);

  home.append(header, main, footer);
  return home;
};

export default Home;