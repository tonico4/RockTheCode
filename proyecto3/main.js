import { Card } from "./components/card/Card";
import { NotFound } from "./components/notfound/NotFound";
import {
  getImageCollectionByText,
  getRandomImageCollection,
} from "./service/apiService";
import "./style.css";

const main$$ = document.querySelector("main");
const a$$ = document.querySelector("a");
a$$.addEventListener("click", async () => {
  main$$.innerHTML = ``;
  await printRandom();
});

const input$$ = document.querySelector("input");
input$$.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && input$$.value !== "") {
    printSearch(input$$.value);
    input$$.value = "";
  } else if (event.key === "Enter" && input$$.value === "") {
    main$$.innerHTML = ``;
    main$$.append(NotFound());
    input$$.value = "";
  }
});

export const printSearch = async (search) => {
  main$$.innerHTML = ``;

  try {
    const objectPexels = await getImageCollectionByText(search);
    const arrayPhotos = objectPexels.photos;
    if (arrayPhotos < 1) {
      main$$.append(NotFound());
    }
    arrayPhotos.forEach((photo) => {
      main$$.append(Card(photo.src.original));
    });
  } catch (err) {
    alert("Error en la búsqueda");
  }
};

const printRandom = async () => {
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
    arrayPhotos.forEach((photo) => {
      main$$.append(Card(photo.src.original));
    });
  } catch (error) {
    console.log(error);
    alert("Failed to load image:", error);
  }
};

await printRandom();
