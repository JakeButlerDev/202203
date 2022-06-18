const hotel2 = [
    {
        roomNumber: 200,
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
        roomNumber: 201,
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
        roomNumber: 202,
        roomType: "Double",
        roomPrice: 300,
        lengthOfStay: 5,
        available: false,
        smoking: false,
        bedtype: "single",
        guestName: "",
        daysRemaining:0, 

    },
    {
        roomNumber: 203,
        roomType: "Double",
        roomPrice: 300,
        lengthOfStay: 5,
        available: true,
        smoking: false,
        bedtype: "single",
        guestName: "",
        daysRemaining:0, 

    },
    {
        roomNumber: 400,
        roomType: "Queen",
        roomPrice: 400,
        lengthOfStay: 0,
        available: true,
        smoking: true,
        bedtype: "single",
        guestName: "",
        daysRemaining:0, 

    },

    {
        roomNumber: 402,
        roomType: "Queen",
        roomPrice: 400,
        lengthOfStay: 5,
        available: false,
        smoking: false,
        bedtype: "single",
        guestName: "",
        daysRemaining:0, 

    },

]

let roomsAvailable = []
let roomsBooked = []

listAvailableRooms = function() {
    let availableRoomHTML = "<select name='HTMLAvailableRooms'>"
    
    for (i=0; i < hotel2.length; i++) {
        if (hotel2[i].available == true) {
            roomsAvailable[i] += parseInt("hotel2[i].roomNumber")
            alert(`${roomsAvailable}`)
            availableRoomHTML += `<option value=${roomsAvailable[i]}>${roomsAvailable[i]}</option>`

        }

    }
    
    availableRoomHTML += "</select>"
    
    document.getElementById("roomsAvailableList").innerHTML = availableRoomHTML

}

// listUnavailableRooms = function() {
//     let bookedRoomsHTML = "<select name= 'HTMLBookedRooms'>"

//     for (i=0; i < hotel2.length; i++) {
//         if (hotel2[i].available == false) {
//             roomsBooked += htoel2[i].roomNumber
//             for (j=0; j < roomsBooked.length; j++) {
//                 bookedRoomsHTML += ` <option value=${roomsBooked[j]}>${roomsBooked[j]}</option>`
//             }

//         }

//     }

//     bookedRoomsHTML += "</select>"

//     document.getElementById("roomsBookedList").innerHTML = bookedRoomsHTML
// }

bookRoom = function() {
    const nameOfGuest = document.getElementById("guestName").value
    const selectedRoomType = document.getElementById("roomType").value
    const guestStay = document.getElementById("stayLength").value

    alert(`${nameOfGuest}, your ${selectedRoomType} room is being booked for ${guestStay} nights.`)
    
    for (i=0; i < hotel2.length; i++) {
        if (hotel2[i].available == true && hotel[i].roomType.toLowerCase() == selectedRoomType.toLowerCase()) {
            hotel2[i].guestName = nameOfGuest
            hotel2[i].lengthOfStay = guestStay
            hotel2[i].available = false
        } else {
            alert(`Sorry ${nameOfGuest}, there are no available rooms matching your criteria.`)
        }
    }
    
    
    listAvailableRooms()
    listUnavailableRooms()
}

bookSelectedRoom = function () {
    const selectedGuest = document.getElementById("guestName2").value
    const selectedRoomType = document.getElementById("roomType").value
    const selectedGuestStay = document.getElementById("stayLength2").value

    for (i=0; i < hotel2.length; i++) {
        if (hotel2[i].available == true && hotel2[i].roomNumber == document.getElementById("roomsAvailableList").value) {
            hotel2[i].guestName = selectedGuest
            hotel2[i].lengthOfStay = selectedGuestStay
            hotel2[i].available = false
        }
    }

    alert(`${selectedGuest}, your ${selectedRoomType} room is being booked for ${selectedGuestStay} nights.`)
    listAvailableRooms()
    listUnavailableRooms()
}

listUnavailableRooms()

listAvailableRooms()