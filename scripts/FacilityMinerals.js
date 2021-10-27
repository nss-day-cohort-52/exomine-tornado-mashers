/*

FacilityMinerals is an intersection dbase for facilities and minerals.
This module contains event listers and creates html for facilityMinerals, and exports to Exomine.

*/

import { getMineralFacilities, getFacilities, getMinerals, setMineral, getMineralPreselector, getFacilityPreselector } from "./dataAccess.js"

const facilitiesArray = getFacilities()
const mineralFacilities = getMineralFacilities()
const mineralArray = getMinerals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "selectMineral") {
            setMineral(parseInt(event.target.value))
        }
    }
    )



export const facilityMinerals = () => {

    //import facility selected in Facilities event listener from getFacilityPreselector
    const targetValue = getFacilityPreselector()

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

    //create variable to set pre-selector before HTML regeneration
    const minSelector = getMineralPreselector()

    let html = `<h2>Facility Minerals for ${currentFacility}</h2>`
    html += "<ul>"

        for (const minfac of mineralFacilities){
            html += "<li>"
            if (minfac.facilityId ===targetValue){
                for (const mineral of mineralArray){
                    if (minfac.mineralId === mineral.id ) {

                        if (mineral.id === minSelector) {
                            
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
        html += "</ul>"
        return html

}
