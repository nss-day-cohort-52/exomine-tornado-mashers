/*

This module contains all get*() and set*() functions for data.

*/

import { database } from "./database.js"

export const getFacilities = () => {
    return database.facilities.map(facilities => ({...facilities}))
}

export const getGovernors = () => {
    return database.governors.map(gov => ({...gov}))
}

export const getColonies = () => {
    return database.colonies.map(colonies => ({...colonies}))
}

export const getMinerals = () => {
    return database.minerals.map(minerals => ({...minerals}))
}

export const getMineralsInventory = () => {
    return database.mineralInventory.map(inventory => ({...inventory}))
} 

export const getMineralFacilities = () => {
    return database.mineralFacilities.map(mineralFacilities => ({...mineralFacilities}))
}


export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
