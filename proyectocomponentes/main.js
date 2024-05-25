import { Card } from './components/card/Card';
import { Home } from "./components/home/Home";
import { NotFound } from './components/notfound/NotFound';
import { getImageCollectionByText } from "./service/apiService";
import "./style.css";

const main$$ = document.querySelector("main");
const a$$ = document.querySelector("a");
a$$.addEventListener("click", () => Home());

const input$$ = document.querySelector("input");
input$$.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    printSearch(input$$.value);
    input$$.value = "";
  }
});

export const printSearch = async (search) => {
  main$$.innerHTML = ``;

  try {
    const objectPexels = await getImageCollectionByText(search);
    const arrayPhotos = objectPexels.photos;
    if (arrayPhotos.length < 1 || input$$.value === "") {
      main$$.append(NotFound());
    }
    arrayPhotos.forEach(photo => {
      main$$.append(Card(photo.src.original));
    });
  } catch (err) {
    main$$.append(NotFound());
  }
  
}

Home();
