import * as math from "./math.js";
import "./app.css";
import icon_github from "../public/images/icon-github.svg";

console.log(math.sum(1, 2));

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(
    ".icon-container"
  ).innerHTML = `<img src="${icon_github}"></img>`;
});
