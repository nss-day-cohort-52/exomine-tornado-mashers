/*

AvaiableResources is an intersection dbase for colonies and minerals.
This module contains event listers and creates html for AvailableResources, and exports to Exomine.

*/
import { getColonies, getGovernors, getGovernorPreselector } from "./dataAccess.js"

export const availableResources = () => {
    
    const coloniesArray = getColonies()
    const govArray = getGovernors()
    //import governor selected in Governors event listener from getGovernorPreselector
    const govValue = getGovernorPreselector()
       
    let currentColony = ""
    
        for (const gov of govArray){
            if (gov.id === govValue){
                const govColony = gov.colonyId
                for (const colony of coloniesArray) {
                    if  (colony.id === govColony){
                         currentColony = colony.name
                    }
                }
            }
        }

    let html = `<h2>${currentColony} Minerals </h2>`
    
    return html    
}
