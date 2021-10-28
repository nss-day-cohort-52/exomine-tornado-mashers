/*

This module contains event listers and creates OrderButton for mineral orders.

*/
import { addMineralPurchase } from "./dataAccess.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addMineralPurchase()
        }
    }
)


export const button = () => {
    return `
    <button id="orderButton" class="orderButton">Purchase Mineral</button>
    `
}