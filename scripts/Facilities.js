/*

This module contains event listers and creates html for facilities, and exports to Exomine.

*/

import { getFacilities } from "./dataAccess.js"

const facilitiesArray = getFacilities()

export const facilities = () => {
   
    let facilitiesHTML = `

        <label for="chooseFacility" class="facilities__label">Choose a facility</label>
        <select name ="chooseFacility" id="facility">
        <option value="0">Choose a facility</option>
    `

    const facilityOptions = facilitiesArray.map( (facility) => {
        return `<option value="${facility.id}">${facility.name}</option>`
    })

    facilitiesHTML += facilityOptions.join("")
    facilitiesHTML += "</select>"

    return facilitiesHTML
}