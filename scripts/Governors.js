/*

This module contains event listers and creates html for governors, and exports to Exomine.

*/
import { getGovernors } from "./dataAccess.js"

const governorsArray = getGovernors()

export const governorHTML = () => {
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

