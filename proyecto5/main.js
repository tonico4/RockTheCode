import GameView from './src/components/gameview/GameView';
import { initializeGame } from './src/controller/AppController';
import './style.css'

const app = document.querySelector("#app");
const header = document.createElement("header");

const title = document.createElement("h1");
title.textContent = "MULTIJUEGOS";
header.append(title);

const gameView = GameView();

app.append(header);
app.append(gameView);

window.onload = initializeGame();