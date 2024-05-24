import { Card } from './components/card/Card';
import { Home } from "./components/home/Home";
import { getImageCollectionByText } from "./service/apiService";
import "./style.css";

const main$$ = document.querySelector("main");

const input$$ = document.querySelector("input");
input$$.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    printSearch(input$$.value);
    input$$.value = "";
  }
});

const printSearch = async (search) => {
  main$$.innerHTML = ``;

  try {
    const objectPexels = await getImageCollectionByText(search);
    const arrayPhotos = objectPexels.photos;
    arrayPhotos.forEach(photo => {
      main$$.append(Card(photo.src.original));
    });
  } catch (error) {
    alert("Failed to load image:", error);
  }
  
}

Home();
