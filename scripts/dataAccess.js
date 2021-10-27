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
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setGovernor = (id) => {
    database.transientState.governorId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setMineral = (id) => {
    database.transientState.mineralId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

