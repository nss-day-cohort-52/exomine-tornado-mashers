/*

This module contains event listers and creates html for governors, and exports to Exomine.

*/
import { cart } from "./Cart.js"
import { getGovernors, setGovernor, getGovernorPreselector, setChosenMaterials, setFacility,  } from "./dataAccess.js"


const governorsArray = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "chooseGovernor") {
            setChosenMaterials()
            setFacility(-1)
            setGovernor(parseInt(event.target.value))
        }
    }
)

export const governor = () => {
    
    let governorsHTML = `
    
        <label for="chooseGovernor" class="governor__label">Choose a governor </label> 
        <select name="chooseGovernor">
        <option name="chooseGovernor" value="0">Choose a governor</option>
    `

    //create variable to set pre-selector before HTML regeneration
    const govSelector = getGovernorPreselector()

    const governorOptions = governorsArray.map( (governor) => {
        if (governor.isActive) {

            //use if-else to mark the chosen governor as default governor before HTML regereragtion
            if (governor.id === govSelector) {
                return `<option name="chooseGovernor" value="${governor.id}" selected="selected">${governor.name}</option>`
            } else {
                return `<option name="chooseGovernor" value="${governor.id}">${governor.name}</option>`
            }
        }
    })

    governorsHTML += governorOptions.join("")
    governorsHTML += "</select>"

    return governorsHTML
}

