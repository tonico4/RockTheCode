import "./style.css";
import { UserCard } from "./src/components/usercard/UserCard";
import { Menu } from "./src/components/menu/Menu";
import { ViewContainer } from "./src/components/viewcontainer/ViewContainer";
import data from "./src/data/user";

const app = document.getElementById("app");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
const date = new Date().getFullYear();

app.append(header);
app.append(main);
app.append(footer);

header.append(UserCard());
main.append(Menu());
main.append(ViewContainer());

const copy = document.createElement("p");
copy.textContent = `©️ ${data.name} - ${date}`;
footer.append(copy);

