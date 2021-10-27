/*

This module contains event listers and creates html for facilities, and exports to Exomine.

*/

import { getFacilities } from "./dataAccess.js"

const facilitiesArray = getFacilities()

export const facilities = () => {
<<<<<<< HEAD
   
    let facilitiesHTML = `
=======

    
    let html = "<h2>choose a facility</h2>"
>>>>>>> main

        <label for="chooseFacility" class="facilities__label">Choose a facility</label>
        <select name ="chooseFacility" id="facility">
        <option value="0">Choose a facility</option>
    `

    const facilityOptions = facilitiesArray.map( (facility) => {
        if (facility.isActive){
        return `<option value="${facility.id}">${facility.name}</option>`
        }
    })

    facilitiesHTML += facilityOptions.join("")
    facilitiesHTML += "</select>"

    return facilitiesHTML
}