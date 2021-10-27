/*

FacilityMinerals is an intersection dbase for facilities and minerals.
This module contains event listers and creates html for facilityMinerals, and exports to Exomine.

*/

import { getMineralFacilities, getFacilities, getMinerals } from "./dataAccess.js"

const facilitiesArray = getFacilities()
const mineralFacilities = getMineralFacilities()
const mineralArray = getMinerals()
let targetValue = 0 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id ==="facility"){
            targetValue = parseInt(event.target.value)
            facilityMinerals()
            document.dispatchEvent(new CustomEvent("facilitychanged"))
        }
    }
)

export const facilityMinerals = () => {
    let currentFacility = ""
    for (const minfac of mineralFacilities){
        if (minfac.facilityId === targetValue){
            for (const facility of facilitiesArray){
                if  (facility.id === minfac.facilityId){
                    currentFacility = facility.name
                }
            }

        }
    }


<<<<<<< HEAD
    let html = `<h2>Facility Minerals for Alderaan</h2>`
=======
    let html = `<h2>facility minerals for ${currentFacility}</h2>`
>>>>>>> main
    html += "<ul>"

        for (const minfac of mineralFacilities){
            if (minfac.facilityId ===targetValue){
                for (const mineral of mineralArray){
                    if (minfac.mineralId === mineral.id ){
                        html += `<li>
            <input type="radio" name="metal" value="${mineral.id}" /> ${minfac.quantity} tons of ${mineral.type}
        </li>`
                    }

                }
            }
        }

        html += "</ul>"
        return html
    }
