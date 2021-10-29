/*

FacilityMinerals is an intersection dbase for facilities and minerals.
This module contains event listers and creates html for facilityMinerals, and exports to Exomine.

*/

import { cart } from "./Cart.js"
import { getMineralFacilities, getFacilities, getMinerals, setMineral, getFacilityPreselector, buildSpaceCart, getChosenMaterials } from "./dataAccess.js"

const facilitiesArray = getFacilities()
const mineralArray = getMinerals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "selectMineral") {
            setMineral(parseInt(event.target.value))
            buildSpaceCart()
        }
    }
    )



export const facilityMinerals = () => {

    //import facility selected in Facilities event listener from getFacilityPreselector
    const targetValue = getFacilityPreselector()

    let currentFacility = ""
    for (const minfac of getMineralFacilities()){
        if (minfac.facilityId === targetValue){
            for (const facility of facilitiesArray){
                if  (facility.id === minfac.facilityId){
                    currentFacility = facility.name
                }
            }

        }
    }

    //create variable to set pre-selector before HTML regeneration
    const chosen = getChosenMaterials()
    

    let html = `<h2>Facility Minerals for ${currentFacility}</h2>`
    html += "<ul>"

    for (const minfac of getMineralFacilities()) {
        if (minfac.facilityId === targetValue) {
            for (const mineral of mineralArray) {
                if (minfac.mineralId === mineral.id ) {
                    if (chosen.length === 0 ){
                        html += `<li>
                        <input type="radio" name="selectMineral" value="${mineral.id}" /> ${minfac.quantity} tons of ${mineral.type}
                        </li>`
                    } else if(chosen.length > 0){
                            const lastIndex = chosen.length -1
                        if (mineral.id === chosen[lastIndex].mineralId) {
                            html += `<li>
                            <input type="radio" name="selectMineral" value="${mineral.id}" checked="checked"/> ${minfac.quantity} tons of ${mineral.type}
                            </li>`
                        } else {
                            html += `<li>
                        <input type="radio" name="selectMineral" value="${mineral.id}" /> ${minfac.quantity} tons of ${mineral.type}
                        </li>`
                        }
                } 
        }
    }
}
}

    
    html += "</ul>"
    
    return html

}
