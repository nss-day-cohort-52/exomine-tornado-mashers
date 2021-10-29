/*

This module contains event listers and creates html for cart to order minerals, and exports to Exomine.

*/

import { getFacilities, getMinerals, getMineralPreselector, getFacilityPreselector, setMineral, getChosenMaterials } from "./dataAccess.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name ==="chooseFacility"){
            setMineral(-1)
            cart()
            document.dispatchEvent( new CustomEvent("stateChanged") )
        }
    }
)


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


// make list items for each "order" (order being individual minerals chosen) purchasebuilder? chosen materials

/* Export only "Space Cart" to Exomine HTML until a facility and a mineral are selected, 
   then display 1 ton of mineral from facility in Space Cart. */
// export const cart = () => {
    
//     const minSelector = getMineralPreselector()
//     const cartcart = purchase
    
//     if (minSelector >= 0) {
    
//         return `
//             <h2>Space Cart</h2>
//             You have chosen 1 ton of ${getMineralName()} from ${getFacilityName()}`
//     } else {
//         return `<h2>Space Cart</h2>`
//     }
// }

export const cart = () => {
    let html = "Space Cart"
    if (getMineralPreselector()) {
        
        for (const choice of getChosenMaterials()) {
            html += `${choice}`

            
        }

    }
    return html


}

