const hotel = [
    {
        roomNumber: 200,
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
        available: false,
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

bookRoom = function() {
    const nameOfGuest = document.getElementById("guestName").value
    const guestRoomType = document.getElementById("guestRoomType").value
    const guestStay = document.getElementById("lengthOfStay").value
    let smokingPreference = document.getElementById("smokingPreference").value

    if (nameOfGuest == "") {
        alert("Please enter your name.")
    } else if(guestStay == "") {
        alert("Please enter how long you would like to stay.")
    }

    if (smokingPreference == "Smoking") {
        smokingPreference = true
    } else if (smokingPreference == "Non Smoking") {
        smokingPreference = false
    }

    for (let i = 0; i < hotel.length; i++) {
                    
        if (hotel[i].available == true && hotel[i].roomType.toLowerCase() == guestRoomType.toLowerCase() && hotel[i].smoking == smokingPreference) {
            hotel[i].guestName = nameOfGuest
            hotel[i].lengthOfStay = guestStay
            alert(`${nameOfGuest}, your room is booked. \n Room Number: ${hotel[i].roomNumber} \n Room Type: ${guestRoomType} \n Nights booked: ${guestStay} \n Smoking allowed: ${hotel[i].smoking} \n Room cost: $${hotel[i].roomPrice*guestStay} \n Thank you for booking!`)
            hotel[i].available = false
            break
        } else if (i == hotel.length - 1) {
            alert(`Sorry ${nameOfGuest}, there are currently no ${guestRoomType} rooms matching your selections available.`)
        }
        
    }
}

bookRoomAvail = function() {
    const nameOfGuest = document.getElementById("guestNameAvail").value
    const guestRoomType = document.getElementById("guestRoomTypeAvail").value
    const guestStay = document.getElementById("lengthOfStayAvail").value
    let smokingPreference = document.getElementById("smokingPreferenceAvail").value


    if (nameOfGuest == "") {
        alert("Please enter your name.")
    } else if(guestStay == "") {
        alert("Please enter how long you would like to stay.")
    }

    if (smokingPreference == "Smoking") {
        smokingPreference = true
    } else if (smokingPreference == "Non Smoking") {
        smokingPreference = false
    }

}

getRooms = function() {
    for (let i = 0; i < hotel.length; i++) {
                    
        if (hotel[i].available == true && hotel[i].roomType.toLowerCase() == guestRoomType.toLowerCase() && hotel[i].smoking == smokingPreference) {
            availRooms = [...hotel[i].roomNumber]
            hotel[i].guestName = nameOfGuest
            hotel[i].lengthOfStay = guestStay
            hotel[i].available = false
            break
        } else if (i == hotel.length - 1) {
            alert(`Sorry ${nameOfGuest}, there are currently no ${guestRoomType} rooms matching your selections available.`)
        }
        
    }

}

bookRoom()
bookRoomAvail()