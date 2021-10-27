/*

This module contains event listers and creates html for governors, and exports to Exomine.

*/
import { getGovernors } from "./dataAccess.js"

const governorsArray = getGovernors()

export const governor = () => {
    
    let governorsHTML = `
    
        <label for="chooseGovernor" class="governor__label">Choose a governor </label> 
        <select name="chooseGovernor" id="governor">
        <option value="0">Choose a governor</option>
    `

    const governorOptions = governorsArray.map( (governor) => {
        return `<option value="${governor.id}">${governor.name}</option>`
    })

    governorsHTML += governorOptions.join("")
    governorsHTML += "</select>"

    return governorsHTML
}

