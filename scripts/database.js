export const database = {
    governors: [
        {
            id: 1,
            name: "Ask Aak",
            isActive: true,
            colonyId: 1
        },{
            id: 2,
            name: "Agrippa Aldrete",
            isActive: true,
            colonyId: 2
        },{
            id: 3,
            name: "Bail Antilles",
            isActive: true,
            colonyId: 2
        },{
            id: 4,
            name: "Bail Organna",
            isActive: true,
            colonyId: 2
        },{
            id: 5,
            name: "Leia Organna",
            isActive: false,
            colonyId: 2
        },{
            id: 6,
            name: "Agrippa Aldrete",
            isActive: true,
            colonyId: 2
        },{
            id: 7,
            name: "Mas Amedda",
            isActive: true,
            colonyId: 3
        },{
            id: 8,
            name: "Padmé Amidala",
            isActive: true,
            colonyId: 4
        },{
            id: 9,
            name: "Jar Jar Binks",
            isActive: false,
            colonyId: 4
        },{
            id: 9,
            name: "Oshadadam",
            isActive: true,
            colonyId: 4
        },{
            id: 9,
            name: "Jar Jar Binks",
            isActive: false,
            colonyId: 4
        },{
            id: 10,
            name: "Passel Argente",
            isActive: true,
            colonyId: 5
        },{
            id: 11,
            name: "Mina Bonteri",
            isActive: true,
            colonyId: 6
        },{
            id: 12,
            name: "Lux Bonteri",
            isActive: true,
            colonyId: 6
        },{
            id: 13,
            name: "Mee Deechi",
            isActive: true,
            colonyId:7
        },{
            id: 14,
            name: "Riyo Chuchi",
            isActive: true,
            colonyId:8
        },{
            id: 15,
            name: "Chi Eekway Papanoida",
            isActive: true,
            colonyId:8
        },{
            id: 16,
            name: "Lolo Purs",
            isActive: true,
            colonyId:9
        }

    ],
    colonies: [
        {
            id: 1,
            name: "Malastare"
        },{
            id: 2,
            name: "Alderaan"
        },{
            id: 3,
            name: "Champala"
        },{
            id: 4,
            name: "Naboo"
        },{
            id: 5,
            name: "Kooriva"
        },{
            id: 6,
            name: "Onderon"
        },{
            id: 7,
            name: "Umbara"
        },{
            id: 8,
            name: "Pantora"
        },{
            id: 9,
            name: "Rodia"
        }



    ],
    mineralInventory: [
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
