import { renderHTML } from "./Exomine.js";

/*

This module reders HTML to index.html.

*/


let el = document.querySelector(".container")

const renderPageHTML = () => {
el.innerHTML = renderHTML()
}

renderPageHTML()

document.addEventListener("governorChanged", event => {
    console.log("GOVERNOR: State of data has changed. Regenerating HTML...")
    renderPageHTML()
})

document.addEventListener("mineralChanged", event => {
    console.log("MINERAL: State of data has changed. Regenerating HTML...")
    renderPageHTML()
})

document.addEventListener("facilityChanged", event => {
    console.log("FACILITY: State of data has changed. Regenerating HTML...")
    renderPageHTML()
})

document.addEventListener("purchaseMineralChanged", event => {
    console.log("PURCHASE MINERAL: State of data has changed. Regenerating HTML...")
    renderPageHTML()
})