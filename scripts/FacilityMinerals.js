/*

FacilityMinerals is an intersection dbase for facilities and minerals.
This module contains event listers and creates html for facilityMinerals, and exports to Exomine.

*/

import { getFacilities } from "./dataAccess.js"

const facilityArray = getFacilities()



export const facilityMinerals = () => {

    let html = `<h2>facility mineral for Alderaan</h2>`
    html += "<ul>"

    // This is how you have been converting objects to <li> elements
    
        
            html += `<li>
            <input type="radio" name="metal" value="1" /> minerallll
        </li>`


        html += "</ul>"
        return html
    }

 
