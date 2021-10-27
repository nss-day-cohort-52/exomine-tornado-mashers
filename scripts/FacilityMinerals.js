/*

FacilityMinerals is an intersection dbase for facilities and minerals.
This module contains event listers and creates html for facilityMinerals, and exports to Exomine.

*/

import { getMineralFacilities, getFacilities, getMinerals, getFacilityPreselector } from "./dataAccess.js"

const facilitiesArray = getFacilities()
const mineralFacilities = getMineralFacilities()
const mineralArray = getMinerals()

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


    let html = `<h2>Facility Minerals for ${currentFacility}</h2>`
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
