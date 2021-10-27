import { getColonies, getGovernors } from "./dataAccess.js"

/*

AvaiableResources is an intersection dbase for colonies and minerals.
This module contains event listers and creates html for AvailableResources, and exports to Exomine.

*/
let govValue = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id ==="governor"){
             govValue = parseInt(event.target.value)
            
            document.dispatchEvent(new CustomEvent("governorChanged"))
        }
    }
)

export const availableResources =() => {
const coloniesArray = getColonies()
const govArray = getGovernors()

let currentColony = ""
    
    for (const gov of govArray){
        if (gov.id === govValue){
            const govColony = gov.colonyId
            for (const colony of coloniesArray){
                if  (colony.id === govColony){
                     currentColony = colony.name
                }
            }

        }
    }

    let html = `<h2>${currentColony} Minerals </h2>`
    
    return html    
}
