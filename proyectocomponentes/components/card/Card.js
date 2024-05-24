import "./Card.css";

export const Card = (url = "") => {
  const card = document.createElement("div");
  card.className = "card";

  const aPhoto = document.createElement("a");
  aPhoto.target = "_blank";
  aPhoto.href = url;

  const photo = document.createElement("img");
  photo.src = url;

  aPhoto.append(photo);
  card.append(aPhoto);

  return card;
}