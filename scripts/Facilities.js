/*

This module contains event listers and creates html for facilities, and exports to Exomine.

*/

import { getFacilities, setFacility, getFacilityPreselector } from "./dataAccess.js"

const facilitiesArray = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name ==="chooseFacility"){
            setFacility(parseInt(event.target.value))
        }
    }
)

export const facilities = () => {

    let facilitiesHTML = `

        <label for="chooseFacility" class="facilities__label">Choose a facility</label>
        <select name ="chooseFacility" id="facility">
        <option name ="chooseFacility" value="0">Choose a facility</option>
    `
    //create variable to set pre-selector before HTML regeneration
    const facSelector = getFacilityPreselector()

    const facilityOptions = facilitiesArray.map( (facility) => {
        if (facility.isActive){
            
            //use if-else to mark the chosen governor as default governor before HTML regereragtion
            if (facility.id === facSelector) {
                return `<option name="chooseFacility" value="${facility.id}" selected="selected">${facility.name}</option>`
            } else {
                return `<option name ="chooseFacility" value="${facility.id}">${facility.name}</option>`
            }
        }
    })

    facilitiesHTML += facilityOptions.join("")
    facilitiesHTML += "</select>"

    return facilitiesHTML
}