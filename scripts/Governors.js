/*

This module contains event listers and creates html for governors, and exports to Exomine.

*/
import { getGovernors, setGovernor } from "./dataAccess.js"

// create dispatch event that will have the message of governor chosen? 

// document.addEventListener(
//     "change",
//     (event) => {
//         if(event.target.id === "governor") {
//             const gov = parseInt(event.target.value)
//             document.dispatchEvent( new CustomEvent(gov)
//             // setGovernor(parseInt(event.target.value))
//         }
//     }
// )


const governorsArray = getGovernors()

export const governor = () => {
        let html = "<h2>choose a governor</h2>"

    html += `<select id="governor">`
    html += '<option value="0">choose a governor</option>'

    const governorOptions = governorsArray.map( (governor) => {
        return `<option value="${governor.id}">${governor.name}</option>`
    })

    html += governorOptions.join("")
    html += "</select>"
    return html
}

