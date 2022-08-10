import * as math from "./math.js";
import { scrollHandler } from "./intersectionObserver.js";

console.log(math.sum(1, 2));

const boxElem = document.querySelectorAll(".box");
scrollHandler(boxElem);
