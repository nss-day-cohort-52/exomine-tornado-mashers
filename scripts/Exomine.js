import { cartHtml } from "./Cart.js";
import { facilitiesHTML } from "./Facilities.js";
import { governorHTML } from "./Governors.js";
import { buttonHTML } from "./OrderButton.js";
/*

This module imports html from individual modules and exports to main.js.

*/
const facilitieshtml = facilitiesHTML()
const governorhtml = governorHTML()
const cartHTML = cartHtml()
const buttonHtml = buttonHTML()

export const renderHTML = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <div class="top">
        <section class="governor">${governorhtml}</section>
        <section class="available_resources"> inventory of colonies</section> 
    </div>
    <section class="facility">${facilitieshtml}</section>

    <div class="bottom">
        <section class="minerals_avail">minerals available for purchase<section> 
        <section class="cart">
            <div class="carthtml">${cartHTML}</div>
            <div class="button">${buttonHtml}</div> 
        </section>
    </div>
    `
}