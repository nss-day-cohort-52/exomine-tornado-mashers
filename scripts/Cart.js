/*

This module contains event listers and creates html for cart to order minerals, and exports to Exomine.

*/

import { getFacilities, getMinerals, getMineralsFacilities } from "./dataAccess.js"

const facilties = getFacilities()



const mineral = "rock"
const facilityName = "earth"


export const cart = () => {
return `
    <h2>Space Cart</h2>
    1 ton of ${mineral} from ${facilityName}`
}

