import { cart } from "./Cart.js";
import { facilities } from "./Facilities.js";
import { facilityMineral } from "./FacilityMinerals.js";
import { governor} from "./Governors.js";
import { button } from "./OrderButton.js";


/*

This module imports html from individual modules and exports to main.js.

*/
const facilitiesHTML= facilities()
const governorHTML = governor()
const cartHTML = cart()
const buttonHTML = button()
const facilityMinerals = facilityMineral()

export const renderHTML = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <div class="top">
        <section class="governor">${governorHTML}</section>
        <section class="available_resources"> inventory of colonies</section> 
    </div>
    <section class="facility">${facilitiesHTML}</section>

    



    <div class="bottom">
        <section class="minerals_avail">${facilityMinerals}<section> 
        <section class="cart">
            <div class="cartHTML">${cartHTML}</div>
            <div class="button">${buttonHTML}</div> 
        </section>
    </div>
    `
}

