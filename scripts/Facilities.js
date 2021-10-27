/*

This module contains event listers and creates html for facilities, and exports to Exomine.

*/

import { getFacilities } from "./dataAccess.js"

const facilitiesArray = getFacilities()

export const facilities = () => {

    
    let html = "<h2>choose a facility</h2>"

    html += `<select id="facility">`
    html += '<option value="0">choose a facility</option>'

    const facilityOptions = facilitiesArray.map( (facility) => {
        if (facility.isActive){
        return `<option value="${facility.id}">${facility.name}</option>`
        }
    })

    html += facilityOptions.join("")
    html += "</select>"
    return html
}