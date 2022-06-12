const hotel2 = [
    {
        roomNumber: 101,
        roomType: "Single",
        roomPrice: 300,
        lengthOfStay: 0,
        available: true,
        smoking: false,
        bedtype: "single",
        guestName: "",
        daysRemaining:0, 

    },
    {
        roomNumber: 102,
        roomType: "Single",
        roomPrice: 300,
        lengthOfStay: 5,
        available: false,
        smoking: false,
        bedtype: "single",
        guestName: "",
        daysRemaining:0, 

    },
    {
        roomNumber: 103,
        roomType: "Single",
        roomPrice: 300,
        lengthOfStay: 0,
        available: true,
        smoking: true,
        bedtype: "single",
        guestName: "",
        daysRemaining:0, 

    },
    {
        roomNumber: 201,
        roomType: "Double",
        roomPrice: 350,
        lengthOfStay: 6,
        available: false,
        smoking: true,
        bedtype: "double",
        guestName: "Ryan Doble",
        daysRemaining: 3
    },
    {
        roomNumber: 202,
        roomType: "Double",
        roomPrice: 350,
        lengthOfStay: 0,
        available: true,
        smoking: false,
        bedtype: "double",
        guestName: "",
        daysRemaining: 0
    },
    {
        roomNumber: 203,
        roomType: "Double",
        roomPrice: 350,
        lengthOfStay: 7,
        available: false,
        smoking: false,
        bedtype: "double",
        guestName: "Lionel Messi",
        daysRemaining: 5
    },
    {
        roomNumber: 401,
        roomType: "Queen",
        roomPrice: 550,
        lengthOfStay: 3,
        available: false,
        smoking: true,
        bedtype: "queen",
        guestName: "Joe Dirt",
        daysRemaining: 1
    },
    {
        roomNumber: 402,
        roomType: "Queen",
        roomPrice: 550,
        lengthOfStay: 5,
        available: false,
        smoking: true,
        bedtype: "queen",
        guestName: "Billy Joel",
        daysRemaining: 5
    }

]
const readline = require('readline')
const guestInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
guestInfo = {
    roomType: '',
    roomNumber: '',
    lengthOfStay: 0,
    guestName: ''

}
guestStay = 0

guestInput.question(`What is the name of the guest? \n`, (guestNameInput) => {
    guestInput.question(`What type of room would you like to book? Choose Single, Double, or Queen. \n`, (guestRoomType) =>
    {
        guestInput.question(`How many days would you like to book this room? \n`, (guestStay) => {
            guestInput.close()
            switch(guestRoomType) {
                case 'Single':
                    for (i = 0; hotel2[i].roomType == 'Single'; i++) {
                        if (hotel2[i].available === true) {
                            if (hotel2[i].smoking === true) {
                            hotel2[i].guestName = guestNameInput
                            hotel2[i].available = false
                            console.log(`${guestNameInput} has been marked as currently staying in ${hotel2[i].roomNumber}`)
                     console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and allows smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`)
                            }
                            if (hotel2[i].smoking === false) {
                                console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and does not allow smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`);
                            }
                        }
                        if (hotel2[i].available === false) {
                            console.log(`All ${guestRoomType} rooms are currently booked by another party. Please try back later. `);
                            break
                        }
                    }
                case 'single':
                    for (i = 0; hotel2[i].roomType == 'Single'; i++) {
                        if (hotel2[i].available === true) {
                            if (hotel2[i].smoking === true) {
                            hotel2[i].guestName = guestNameInput
                            hotel2[i].available = false
                            console.log(`${guestNameInput} has been marked as currently staying in ${hotel2[i].roomNumber}`)
                     console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and allows smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`)
                            }
                            if (hotel2[i].smoking === false) {
                                console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and does not allow smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`);
                            }
                        }
                        if (hotel2[i].available === false) {
                            console.log(`All ${guestRoomType} rooms are currently booked by another party. Please try back later. `);
                            i = hotel2.length + 1
                            break
                        }
                    }
                case 'Double':
                    for (i = 3; hotel2[i].roomType == 'Queen'; i++) {
                        if (hotel2[i].available === true) {
                            if (hotel2[i].smoking === true) {
                            hotel2[i].guestName = guestNameInput
                            hotel2[i].available = false
                            console.log(`${guestNameInput} has been marked as currently staying in ${hotel2[i].roomNumber}`)
                     console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and allows smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`)
                            }
                            if (hotel2[i].smoking === false) {
                                console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and does not allow smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`);
                            }
                        }
                        if (hotel2[i].available === false) {
                            console.log(`All ${guestRoomType} rooms are currently booked by another party. Please try back later. `);
                            i = hotel2.length + 1
                            break
                        }
                    }
                case 'double':
                    for (i = 3; hotel2[i].roomType == 'Double'; i++) {
                        if (hotel2[i].available === true) {
                            if (hotel2[i].smoking === true) {
                            hotel2[i].guestName = guestNameInput
                            hotel2[i].available = false
                            console.log(`${guestNameInput} has been marked as currently staying in ${hotel2[i].roomNumber}`)
                     console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and allows smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`)
                            }
                            if (hotel2[i].smoking === false) {
                                console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and does not allow smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`);
                            }
                        }
                        if (hotel2[i].available === false) {
                            console.log(`All ${guestRoomType} rooms are currently booked by another party. Please try back later. `);
                            i = hotel2.length + 1
                            break
                        }
                    }
                case 'Queen':
                    for (i = 6; hotel2[i].roomType == 'Queen'; i++) {
                        if (hotel2[i].available === true) {
                            if (hotel2[i].smoking === true) {
                            hotel2[i].guestName = guestNameInput
                            hotel2[i].available = false
                            console.log(`${guestNameInput} has been marked as currently staying in ${hotel2[i].roomNumber}`)
                     console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and allows smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`)
                            }
                            if (hotel2[i].smoking === false) {
                                console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and does not allow smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`);
                            }
                        }
                        if (hotel2[i].available === false) {
                            console.log(`All ${guestRoomType} rooms are currently booked by another party. Please try back later. `);
                            break
                        }
                    }
                case 'queen':
                    for (i = 6; hotel2[i].roomType == 'Queen'; i++) {
                        if (hotel2[i].available === true) {
                            if (hotel2[i].smoking === true) {
                            hotel2[i].guestName = guestNameInput
                            hotel2[i].available = false
                            console.log(`${guestNameInput} has been marked as currently staying in ${hotel2[i].roomNumber}`)
                     console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and allows smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`)
                            }
                            if (hotel2[i].smoking === false) {
                                console.log(`Congrats, ${guestNameInput}! You have booked room ${hotel2[i].roomNumber}, which is a ${hotel2[i].roomType} room, costs ${hotel2[i.roomPrice]} per night, has a ${hotel2[i].bedtype} bed, and does not allow smoking. Your total cost will be $${hotel2[i].roomPrice*guestStay}.`);
                            }
                        }
                        if (hotel2[i].available === false) {
                            console.log(`All ${guestRoomType} rooms are currently booked by another party. Please try back later. `);
                            break
                        }
                    }
            }
        })
        guestInfo.roomType = guestRoomType
    })
    guestInfo.guestName = guestNameInput
})