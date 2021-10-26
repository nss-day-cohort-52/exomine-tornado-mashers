export const database = {
    governors: [
        {
            id: 1,
            name: "John Doe",
            isActive: true,
            colonyId: 1
        }
    ],
    colonies: [
        {
            id: 1,
            name: "mars"
        }
    ],
    purchasedMinerals: [
        {
            id: 1,
            colonyId: 1,
            mineralId: 1,
            mineralQty: 1.5
        }
    ],
    minerals: [
        {
            id: 1,
            type: "iron"
        }
    ],
    mineralFacilities: [
        {
            id: 1,
            facilityId: 1,
            mineralsId: 1,
            quantity: 1.5
        }
    ],
    facilities: [
        {
            id: 1,
            name: "lunarBase",
            isActive: true
        }
    ],
    transientState: {}
}
