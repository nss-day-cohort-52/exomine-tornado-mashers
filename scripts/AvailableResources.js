/*

AvailableResources is an intersection dbase for colonies and minerals.
This module contains event listers and creates html for AvailableResources, and exports to Exomine.

*/
import { getColonies, getGovernors, getMinerals, getMineralsInventory, getGovernorPreselector } from "./dataAccess.js"

export const availableResources = () => {
    
    
    
    const coloniesArray = getColonies()
    const govArray = getGovernors()
    const mineralInv = getMineralsInventory()
    const mineralArray = getMinerals()

    //import governor selected in Governors event listener from getGovernorPreselector
    const govValue = getGovernorPreselector()
       
    let currentColony = ""
    
    for (const gov of govArray){
        if (gov.id === govValue){
            const govColony = gov.colonyId
            for (const colonyName of coloniesArray) {
                if  (colonyName.id === govColony){
                    currentColony = colonyName.name
                }
            }
        }
    }

    let html = ""
    if (currentColony === ""){
        html = `<h2>Colony Minerals </h2>`
    } else {
        html = `<h2>${currentColony} Minerals </h2>`
    }

    html += "<ul>"

        for (const colonyMinerals of coloniesArray){
            if (currentColony === colonyMinerals.name){
                for (const mineralQty of mineralInv){
                    if (colonyMinerals.id === mineralQty.colonyId){
                        for(const mineralName of mineralArray){
                            if (mineralName.id === mineralQty.mineralId){
                                html += `<li class="${mineralName.id}" />
                                ${mineralQty.mineralQty} tons of ${mineralName.type}
                            </li>`
                            }
                        }
                    }
                }
            }
        }

    html += "</ul>"
    return html
    
}
