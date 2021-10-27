export const database = {

    governors: [
        { id: 1, name: "Ask Aak", isActive: true, colonyId: 1 },
        { id: 2, name: "Agrippa Aldrete", isActive: true, colonyId: 2 },
        { id: 3, name: "Bail Antilles", isActive: true, colonyId: 2 },
        { id: 4, name: "Bail Organna", isActive: true, colonyId: 2 },
        { id: 5, name: "Leia Organna", isActive: false, colonyId: 2 },
        { id: 6, name: "Agrippa Aldrete", isActive: true, colonyId: 2 },
        { id: 7, name: "Mas Amedda", isActive: true, colonyId: 3 },
        { id: 8, name: "Padmé Amidala", isActive: true, colonyId: 4 },
        { id: 9, name: "Jar Jar Binks", isActive: false, colonyId: 4 },
        { id: 9, name: "Oshadadam", isActive: true, colonyId: 4 },
        { id: 9, name: "Jar Jar Binks", isActive: false, colonyId: 4 },
        { id: 10, name: "Passel Argente", isActive: true, colonyId: 5 },
        { id: 11, name: "Mina Bonteri", isActive: true, colonyId: 6 },
        { id: 12, name: "Lux Bonteri", isActive: true, colonyId: 6 },
        { id: 13, name: "Mee Deechi", isActive: true, colonyId:7 },
        { id: 14, name: "Riyo Chuchi", isActive: true, colonyId:8 },
        { id: 15, name: "Chi Eekway Papanoida", isActive: true, colonyId:8 },
        { id: 16, name: "Lolo Purs", isActive: true, colonyId:9 },
        { id: 17, name: "Anaconda Farr", isActive: true, colonyId:9 },
        { id: 18, name: "Tikkes", isActive: false, colonyId:10 },
        { id: 19, name: "Meena Tills", isActive: true, colonyId:10 },
        { id: 20, name: "Ainlee Teem", isActive: true, colonyId:1 }
    ],

    colonies: [
        { id: 1, name: "Malastare" },
        { id: 2, name: "Alderaan" },
        { id: 3, name: "Champala" },
        { id: 4, name: "Naboo" },
        { id: 5, name: "Kooriva" },
        { id: 6, name: "Onderon" },
        { id: 7, name: "Umbara" },
        { id: 8, name: "Pantora" },
        { id: 9, name: "Rodia" },
        { id: 10, name: "Mon Cala" }
    ],

    mineralInventory: [
        { id: 1, colonyId: 1, mineralId: 1, mineralQty: 10 },
        { id: 2, colonyId: 1, mineralId: 2, mineralQty: 30 },
        { id: 3, colonyId: 1, mineralId: 3, mineralQty: 17 },
        { id: 4, colonyId: 2, mineralId: 4, mineralQty: 29 },
        { id: 5, colonyId: 2, mineralId: 5, mineralQty: 50 },
        { id: 6, colonyId: 2, mineralId: 6, mineralQty: 20 },
        { id: 7, colonyId: 3, mineralId: 6, mineralQty: 37 },
        { id: 8, colonyId: 3, mineralId: 7, mineralQty: 17 },
        { id: 9, colonyId: 3, mineralId: 8, mineralQty: 82 },
        { id: 10, colonyId: 3, mineralId: 9, mineralQty: 12 },
        { id: 11, colonyId: 4, mineralId: 1, mineralQty: 25 },
        { id: 12, colonyId: 4, mineralId: 2, mineralQty: 33 },
        { id: 13, colonyId: 4, mineralId: 3, mineralQty: 41 },
        { id: 14, colonyId: 4, mineralId: 8, mineralQty: 10 },
        { id: 15, colonyId: 4, mineralId: 10, mineralQty: 6 },
        { id: 16, colonyId: 5, mineralId: 2, mineralQty: 50 },
        { id: 17, colonyId: 5, mineralId: 3, mineralQty: 12 },
        { id: 18, colonyId: 5, mineralId: 4, mineralQty: 11 },
        { id: 19, colonyId: 5, mineralId: 5, mineralQty: 48 },
        { id: 20, colonyId: 5, mineralId: 6, mineralQty: 97 },
        { id: 21, colonyId: 6, mineralId: 4, mineralQty: 82 },
        { id: 22, colonyId: 6, mineralId: 6, mineralQty: 43 },
        { id: 23, colonyId: 6, mineralId: 7, mineralQty: 24 },
        { id: 24, colonyId: 6, mineralId: 8, mineralQty: 17 },
        { id: 25, colonyId: 6, mineralId: 9, mineralQty: 52 },
        { id: 26, colonyId: 7, mineralId: 1, mineralQty: 33 },
        { id: 27, colonyId: 7, mineralId: 3, mineralQty: 42 },
        { id: 28, colonyId: 7, mineralId: 9, mineralQty: 26 },
        { id: 29, colonyId: 7, mineralId: 10, mineralQty: 41 },
        { id: 30, colonyId: 8, mineralId: 2, mineralQty: 12 },
        { id: 31, colonyId: 8, mineralId: 1, mineralQty: 8 },
        { id: 32, colonyId: 8, mineralId: 4, mineralQty: 5 },
        { id: 33, colonyId: 8, mineralId: 6, mineralQty: 7 },
        { id: 34, colonyId: 9, mineralId: 4, mineralQty: 32 },
        { id: 35, colonyId: 9, mineralId: 5, mineralQty: 12 },
        { id: 36, colonyId: 9, mineralId: 6, mineralQty: 18 },
        { id: 37, colonyId: 9, mineralId: 7, mineralQty: 40 },
        { id: 38, colonyId: 10, mineralId: 3, mineralQty: 30 },
        { id: 39, colonyId: 10, mineralId: 6, mineralQty: 4 },
        { id: 40, colonyId: 10, mineralId: 8, mineralQty: 22 },
        { id: 41, colonyId: 10, mineralId: 9, mineralQty: 1 },
        { id: 42, colonyId: 10, mineralId: 10, mineralQty: 41 }
    ],

    minerals: [
        { id: 1, type: "Carbonie" },
        { id: 2, type: "Durelium" },
        { id: 3, type: "Quadrillium" },
        { id: 4, type: "Barab ore" },
        { id: 5, type: "Guerrerite" },
        { id: 6, type: "Hollinium" },
        { id: 7, type: "Permex" },
        { id: 8, type: "Azurite" },
        { id: 9, type: "Agrocite" },
        { id: 10, type: "Hibridium" }
    ],

    facilityMinerals: [    
        { id: 1, facilityId: 1, mineralId: 4, quantity: 20 },
        { id: 2, facilityId: 1, mineralId: 6, quantity: 60 },
        { id: 3, facilityId: 1, mineralId: 8, quantity: 34 },
        { id: 4, facilityId: 1, mineralId: 9, quantity: 58 },
        { id: 5, facilityId: 2, mineralId: 1, quantity: 100 },
        { id: 6, facilityId: 2, mineralId: 2, quantity: 40 },
        { id: 7, facilityId: 2, mineralId: 3, quantity: 74 },
        { id: 8, facilityId: 3, mineralId: 1, quantity: 34 },
        { id: 9, facilityId: 3, mineralId: 3, quantity: 99 },
        { id: 10, facilityId: 3, mineralId: 9, quantity: 24 },
        { id: 11, facilityId: 3, mineralId: 10, quantity: 50 },
        { id: 12, facilityId: 4, mineralId: 4, quantity: 66 },
        { id: 13, facilityId: 4, mineralId: 5, quantity: 82 },
        { id: 14, facilityId: 4, mineralId: 6, quantity: 18 },
        { id: 15, facilityId: 5, mineralId: 2, quantity: 97 },
        { id: 16, facilityId: 5, mineralId: 3, quantity: 22 },
        { id: 17, facilityId: 5, mineralId: 4, quantity: 99 },
        { id: 18, facilityId: 5, mineralId: 6, quantity: 98 },
        { id: 19, facilityId: 6, mineralId: 6, quantity: 86 },
        { id: 20, facilityId: 6, mineralId: 7, quantity: 34 },
        { id: 21, facilityId: 6, mineralId: 8, quantity: 99 },
        { id: 22, facilityId: 6, mineralId: 9, quantity: 66 },
        { id: 23, facilityId: 7, mineralId: 4, quantity: 84 },
        { id: 24, facilityId: 7, mineralId: 5, quantity: 52 },
        { id: 25, facilityId: 7, mineralId: 7, quantity: 82 },
        { id: 26, facilityId: 8, mineralId: 1, quantity: 24 },
        { id: 27, facilityId: 8, mineralId: 2, quantity: 16 },
        { id: 28, facilityId: 8, mineralId: 3, quantity: 25 },
        { id: 29, facilityId: 8, mineralId: 10, quantity: 37 },
        { id: 30, facilityId: 9, mineralId: 3, quantity: 64 },
        { id: 31, facilityId: 9, mineralId: 6, quantity: 24 },
        { id: 32, facilityId: 9, mineralId: 9, quantity: 80 },
        { id: 33, facilityId: 9, mineralId: 10, quantity: 60 },
        { id: 34, facilityId: 10, mineralId: 2, quantity: 64 },
        { id: 35, facilityId: 10, mineralId: 4, quantity: 92 },
        { id: 36, facilityId: 10, mineralId: 6, quantity: 82 }
    ],

    facilities: [    
        { id: 1, name: "Salliche", isActive: true },
        { id: 2, name: "Taldot sector", isActive: true },
        { id: 3, name: "Sern Prime", isActive: true },
        { id: 4, name: "Prontobranch", isActive: true },
        { id: 5, name: "Sennex", isActive: false },
        { id: 6, name: "Techno Union", isActive: true },
        { id: 7, name: "Chommell sector", isActive: true },
        { id: 8, name: "Er'Kit", isActive: true },
        { id: 9, name: "Kalevala", isActive: false },
        { id: 10, name: "Forrested Moon of Endor", isActive: true }
    ],

    transientState: {}

}

