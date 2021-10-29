/*

This module contains all get*() and set*() functions for data.

*/

import { database } from "./database.js"

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

export const getGovernors = () => {
    return database.governors.map(gov => ({...gov}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const getChosenMaterials = () => {
    return database.chosenMaterials.map(chosMat => ({...chosMat}))
}

export const getMineralsInventory = () => {
    return database.mineralInventory.map(inventory => ({...inventory}))
} 

export const getMineralFacilities = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

export const getGovernorPreselector = () => {
    return database.transientState.governorId
}

export const getFacilityPreselector = () => {
    return database.transientState.facilityId
}

export const getMineralPreselector = () => {
    return database.transientState.mineralId
}

export const setFacility = (id) => {
    database.transientState.facilityId = id
    document.dispatchEvent( new CustomEvent("facilityChanged") )
}

export const setGovernor = (id) => {
    database.transientState.governorId = id
    document.dispatchEvent( new CustomEvent("governorChanged") )
}

export const setMineral = (id) => {
    database.transientState.mineralId = id
    document.dispatchEvent( new CustomEvent("mineralChanged") )
}

export const setChosenMaterials = () => {
    database.chosenMaterials = []
    document.dispatchEvent(new CustomEvent("chosMatChanged"))
}

export const buildSpaceCart = () => {
    
    //chosenMaterials
    let newOrder = {...database.transientState}
    if (database.chosenMaterials.length === 0){
        newOrder.id = 1

          //add a primary key if necessary
        } else {
                    
            //add mineral to colony's inventory if it does not already exist
            const lastIndex = database.chosenMaterials.length - 1
            newOrder.id = database.mineralInventory[lastIndex].id + 1
        }

    database.chosenMaterials.push(newOrder)
    newOrder = {}
    delete database.transientState.mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

export const addMineralPurchase = () => {

    for (const material of database.chosenMaterials){ //changed

    //get current state from transientState & purchaseBuilder
    const mineralPurchase = material //changed
    const newOrder = {...database.purchaseBuilder}

    
    //find governor's colony
    const findColony = () => {
        for (const gov of database.governors) {
            if (gov.id === mineralPurchase.governorId) {
                return gov.colonyId
            }
        }
    }

    //find mineral 
    const findMinInv = () => {
        for (const minInvObj of database.mineralInventory) {
            if (minInvObj.colonyId === findColony() && minInvObj.mineralId === mineralPurchase.mineralId) {

                return minInvObj
            }
        }
    }

    if (findMinInv()) {

        findMinInv().mineralQty += 1
    } else {
        
        //determine if there is a primary key for the item
        if (database.mineralInventory.length === 0) {
            newOrder.id = 1

          //add a primary key if necessary
        } else {
                    
            //add mineral to colony's inventory if it does not already exist
            const lastIndex = database.mineralInventory.length - 1
            newOrder.id = database.mineralInventory[lastIndex].id + 1
        }
        
        newOrder.mineralId = mineralPurchase.mineralId
        newOrder.colonyId = findColony()
        newOrder.mineralQty = 1
                    
        database.mineralInventory.push(newOrder)                
    }

    for (const fac of database.facilityMinerals){
        if (fac.facilityId === database.transientState.facilityId){
            if (fac.mineralId === findMinInv().mineralId){
                fac.quantity -= 1 
            }
        }
    }
    } //changed
    
    //Reset transientState & purchaseBuilder

    database.purchaseBuilder = {}
    database.chosenMaterials = [] //changed
    //Broadcast notification that permanent state has changed

    document.dispatchEvent( new CustomEvent("purchaseMineralChanged") )


}
