import { facilitiesHTML } from "./Facilities.js";
import { governorHTML } from "./Governors.js";
/*

This module imports html from individual modules and exports to main.js.

*/
const facilitieshtml = facilitiesHTML()
const governorhtml = governorHTML()

export const renderHTML = () => {
    return `${facilitieshtml}
    ${governorhtml}
    `
}