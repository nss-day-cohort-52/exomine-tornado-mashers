/*

This module contains event listers and creates html for cart to order minerals, and exports to Exomine.

*/

import { getFacilities, getMinerals, getMineralPreselector, getFacilityPreselector } from "./dataAccess.js"


// Find name of mineral when called by cart()
const getMineralName = () => {
    
    const minArray = getMinerals()
    const minSelector = getMineralPreselector()
    
    for (const mineral of minArray) {
        if (mineral.id === minSelector) {
            return mineral.type
        }
    }
    
}

// Find name of facility when called by cart()
const getFacilityName = () => {
    
    const facArray = getFacilities()
    const facSelector = getFacilityPreselector()
    
    for (const facility of facArray) {
        if (facility.id === facSelector) {
            return facility.name
        }
    }

}


/* Export only "Space Cart" to Exomine HTML until a facility and a mineral are selected, 
   then display 1 ton of mineral from facility in Space Cart. */
export const cart = () => {
    
    const minSelector = getMineralPreselector()
    
    if (minSelector >= 0) {
    
        return `
            <h2>Space Cart</h2>
            1 ton of ${getMineralName()} from ${getFacilityName()}`
    } else {
        return `<h2>Space Cart</h2>`
    }
}