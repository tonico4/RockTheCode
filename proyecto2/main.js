import "./style.css";
import { products } from "./products";

// Variables
const filterDivs = ["Vendedor", "Precio", "Estrellas"];
let selectedSeller;
let selectedPrice;

// NODES
const app$$ = document.querySelector("#app");
const header$$ = document.createElement("header");
const logoImg$$ = document.createElement("img");
const filter$$ = document.createElement("aside");
const products$$ = document.createElement("section");

// HEADER
logoImg$$.src =
  "https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg";
logoImg$$.alt = "Logo de PC Componentes";
header$$.append(logoImg$$);

// FILTER
filter$$.className = "filter";

// Create filter divs
for (const filter of filterDivs) {
  const filterDiv$$ = document.createElement("div");
  filterDiv$$.className = "filter-div";
  const titleFilter$$ = document.createElement("h4");
  titleFilter$$.textContent = filter;
  filterDiv$$.append(titleFilter$$);

  // Seller filter
  if (filter === "Vendedor") {
    const select$$ = document.createElement("select");
    select$$.addEventListener("change", () => {
      selectedSeller = select$$.value;
      filterBy(filter);
    })
    filterDiv$$.append(select$$);
    const optionDefault$$ = document.createElement("option");
    optionDefault$$.value = "";
    optionDefault$$.textContent = "Elige un vendedor:";
    select$$.append(optionDefault$$);

    const sellers = new Set();
    products.forEach((product) => {
      sellers.add(product.seller);
    });

    sellers.forEach((seller) => {
      const option$$ = document.createElement("option");
      option$$.value = seller;
      option$$.textContent = seller;
      select$$.append(option$$);
    });
  }

  // Price filter
  if (filter === "Precio") {
    const input$$ = document.createElement("input");
    input$$.type = "number";
    input$$.placeholder = "Menor o igual que";
    input$$.addEventListener("change", () => {
      selectedPrice = input$$.value
    })
    filterDiv$$.append(input$$);
    const searchPriceButton$$ = document.createElement("button");
    searchPriceButton$$.textContent = "Buscar";
    searchPriceButton$$.addEventListener("click", () => {
      filterBy(filter);
    });
    filterDiv$$.append(searchPriceButton$$);
  }

  // Stars filter
  if (filter === "Estrellas") {
    const floorButton$$ = document.createElement("button");
    floorButton$$.textContent = "Mayor a menor";
    floorButton$$.addEventListener("click", () => {
      clearFilters();
      const filter = [...products].sort((a, b) => b.stars - a.stars); // [...products] hace una copia de products para evitar el error al limpiar
      createAllProducts(filter);
    })
    const ceilButton$$ = document.createElement("button");
    ceilButton$$.textContent = "Menor a mayor";
    ceilButton$$.addEventListener("click", () => {
      clearFilters();
      const filter = [...products].sort((a, b) => a.stars - b.stars); // [...products] hace una copia de products para evitar el error al limpiar
      createAllProducts(filter);
    })
    filterDiv$$.append(floorButton$$);
    filterDiv$$.append(ceilButton$$);
  }

  filter$$.append(filterDiv$$);
}

// Clear button
const clearButton$$ = document.createElement("button");
clearButton$$.id = "clear"
clearButton$$.textContent = "Limpiar";
clearButton$$.addEventListener("click", () => {
  clearFilters();
  createAllProducts();
})
filter$$.append(clearButton$$);

// SECTION PRODUCT
products$$.className = "products";

const createAllProducts = (filter = products) => { // All products are the default filter
  products$$.innerHTML = "";
  filter.forEach((product) => {
    // Card
    const card$$ = document.createElement("article");
    card$$.className = "card";

    // Card > img
    const productImg$$ = document.createElement("img");
    productImg$$.src = product.image;
    card$$.append(productImg$$);

    // Card > title
    const productName$$ = document.createElement("h3");
    productName$$.textContent = product.name;
    card$$.append(productName$$);

    // Card > price
    const productPrice$$ = document.createElement("p");
    productPrice$$.textContent = product.price + "€";
    productPrice$$.className = "price";
    card$$.append(productPrice$$);

    // Card > stars + reviews
    const starsDiv$$ = document.createElement("div");
    starsDiv$$.className = "stars-div";
    for (let i = 0; i < 5; i++) {
      const productStar$$ = document.createElement("div");
      if (i >= product.stars) {
        productStar$$.className = "star";
      } else {
        productStar$$.className = "fill-star";
      }
      starsDiv$$.append(productStar$$);
    }
    card$$.append(starsDiv$$);

    const reviewNumber$$ = document.createElement("p");
    reviewNumber$$.textContent = `Reviews: ${product.reviews}`;
    card$$.append(reviewNumber$$);

    // Card > seller
    const productSeller$$ = document.createElement("p");
    productSeller$$.textContent = `Vendido por: `;
    const spantext$$ = document.createElement("span");
    spantext$$.textContent = product.seller;
    productSeller$$.append(spantext$$);
    card$$.append(productSeller$$);

    products$$.append(card$$);
  });
};

const clearFilters = () => {
  selectedSeller = "";
  selectedPrice = "";
  document.querySelector("select").value = "";
  document.querySelector("input[type='number']").value = "";
}

const filterBy = (filterType) => {
  if (filterType === "Vendedor") {
    selectedPrice = "";
    document.querySelector("input[type='number']").value = "";
    const filter = products.filter((product) => {
      return product.seller === selectedSeller || selectedSeller === "";
    });
    createAllProducts(filter);
  } else if (filterType === "Precio") {
    selectedSeller = "";
    document.querySelector("select").value = "";
    const filter = products.filter((product) => {
      return product.price <= selectedPrice || selectedPrice === "";
    })
    createAllProducts(filter);
  }
}

// Add nodes
document.body.insertBefore(header$$, app$$);
app$$.append(filter$$);
app$$.append(products$$);

// Render
createAllProducts();
