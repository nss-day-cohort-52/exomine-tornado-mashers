/*

This module contains event listers and creates html for cart to order minerals, and exports to Exomine.

*/

import { getFacilities, getMinerals, getMineralPreselector, getFacilityPreselector, setMineral, getChosenMaterials } from "./dataAccess.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "selectMineral") {
            cart()
            document.dispatchEvent( new CustomEvent("mineralChanged") )
            
        }
    }
    )

    

    
    
/* Export only "Space Cart" to Exomine HTML until a facility and a mineral are selected, 
   then display 1 ton of mineral from facility in Space Cart. */
export const cart = () => {
    let html = ""

    if (getChosenMaterials().length === 0){
        return html += `<h2>Space Cart</h2>`
    } else {
        html += `<h2>Space Cart</h2>`
        html += `<ul>`
    for (const order of getChosenMaterials()){

        const getMineralName = () => {
    
            const minSelector = order.mineralId
            
            for (const mineral of getMinerals()) {
                if (mineral.id === minSelector) {
                    return mineral.type
                }
            }
            
        }
        
        // Find name of facility when called by cart()
        const getFacilityName = () => {
            
            const facSelector = order.facilityId
            
            for (const facility of getFacilities()) {
                if (facility.id === facSelector) {
                    return facility.name
                }
            }
        
        }

        html += `<li>
            You have chosen 1 ton of ${getMineralName()} from ${getFacilityName()}</li>`
    }
    html += `</ul>`
}
return html
}
