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

]

const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
userInput.question("What is the guest's name? ", (guest) => {
    userInput.close();

for (i = 0; i < hotel2.length; i++) {
    if (hotel2[i].available === true) {
            hotel2[i].guestName = guest;
            hotel2[i].available = false;
            console.log(`${guest} has been marked as currently staying in ${hotel2[i].roomNumber}`);
            break;
        };
    }
    console.log(hotel2);
})