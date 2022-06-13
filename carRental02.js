const carManufacturers = ["Chevy", "Ford", "Mercedes"]
const carModels = [["Camaro", "Chevette", "GMC", "Silverado"], ["Fusion", "Focus", "GT"], ["CLS", "EQS", "Maybach"]]
let carMileage = [[55221, 22890, 100, 5000], [12897, 78233, 6231], [17, 5499, 90128]]
let carAvailability = [[true, true, true, false], [false, true, false], [false, true, true]]
const dailyRentalRate = [[121, 76, 80, 100], [64, 50, 176], [155, 142, 376]]
let renter = [["", "", "", "James Cameron"], ["AJ Powers", "", "Baker Mayfield"], ["Abel Tesfaye", "", ""]]
let daysRented = [[0, 0, 0, 5], [8, 0, 12], [3, 0, 0]]


const readline = require('readline')
const makeWanted = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

makeWanted.question('What brand of car are you interested in?', (makeWanted) => {

    carsAvailable()

    makeWanted.close()
})

carsAvailable = function() {
   
}