import { cart } from "./Cart.js";
import { facilities } from "./Facilities.js";
import { facilityMinerals } from "./FacilityMinerals.js";
import { governor} from "./Governors.js";
import { button } from "./OrderButton.js";
import { availableResources } from "./AvailableResources.js"

/*

This module imports html from individual modules and exports to main.js.

*/





export const renderHTML = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <div class="top">
        <section class="governor">${governor()}</section>
        <section class="available_resources"> ${availableResources()}</section> 
    </div>
    <section class="facilities">${facilitiesHTML}</section>
    
    <div class="bottom">
        <section class="minerals_avail">${facilityMineralHTML}</section> 
        <section class="cart">
            <div class="cartHTML">${cart()}</div>
            <div class="button">${button()}</div> 
        </section>
    </div>
    `
}

