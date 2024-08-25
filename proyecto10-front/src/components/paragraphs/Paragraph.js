const Paragraph = (text) => {
  const p = document.createElement("p");
  p.textContent = text;

  return p;
}

export default Paragraph;