import { getRandomImageCollection } from "../../service/apiService";
import { Card } from "../card/Card";

export const Home = () => {
  const main = document.querySelector("main");
  main.innerHTML = ``;

  const printInitial = async () => {
    // UNSPLASH
    /* try {
      const arrayUnsplash = await getRandomImageCollection();
      for (const img of arrayUnsplash) {
        const url = img.urls.raw;
        main.append(Card(url));
      }
    } catch (error) {
      alert("Failed to load image:", error);
    } */

    // PEXELS
    try {
      const objectPexels = await getRandomImageCollection();
      const arrayPhotos = objectPexels.photos;
      arrayPhotos.forEach(photo => {
        main.append(Card(photo.src.original));
      });
    } catch (error) {
      alert("Failed to load image:", error);
    }
  };

  printInitial();
};
