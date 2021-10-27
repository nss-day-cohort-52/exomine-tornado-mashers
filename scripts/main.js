import { renderHTML } from "./Exomine.js";

/*

This module reders HTML to index.html.

*/


let el = document.querySelector(".container")

const renderPageHTML = () => {
el.innerHTML = renderHTML()
}

renderPageHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderPageHTML()
})