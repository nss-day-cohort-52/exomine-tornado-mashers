import { renderHTML } from "./Exomine.js";
/*

This module reders HTML to index.html.

*/


let el = document.querySelector(".container")

const htmlPage = () => {
el.innerHTML = renderHTML()
}

htmlPage()