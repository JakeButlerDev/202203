// 1. Three different car manufacturers (Chevy, Ford, Mercedes)
// 2. two to four car types per manufacturer
// 3. Track mileage for each car
// 4. set a car availability status.  Make some available some not available 
// 5. The daily car rental rate for each car.
// 6. The names of the person renting (if the car is not available)
// 7.  the number of days the car is being rented ( if the car is not available)
// 8. Create a summary report for each car that is rented (not currently available).
// 9.  Instead of writing your code all in the Global scope.  Use more than one function.  split various jobs into different functions.  Have the main function call each of the other functions.


const carManufacturers = ["Chevy", "Ford", "Mercedes"]
const carModels = [["Camaro", "Chevette", "GMC", "Silverado"], ["Fusion", "Focus", "GT"], ["CLS", "EQS", "Maybach"]]
let carMileage = [[55221, 22890, 100, 5000], [12897, 78233, 6231], [17, 5499, 90128]]
let carAvailability = [[true, true, true, false], [false, true, false], [false, true, true]]
const dailyRentalRate = [[121, 76, 80, 100], [64, 50, 176], [155, 142, 376]]
let renter = [["", "", "", "James Cameron"], ["AJ Powers", "", "Baker Mayfield"], ["Abel Tesfaye", "", ""]]
let daysRented = [[0, 0, 0, 5], [8, 0, 12], [3, 0, 0]]


carsRented = function() {
    for (i=0; i < carManufacturers.length; i++) {

        for (j=0; j< carAvailability[i].length; j++) {

            if (carAvailability[i][j] === false) {
                console.log(`The ${carModels[i][j]} is currently rented to ${renter[i][j]} for ${daysRented[i][j]} more days. If recalled we will lose $${dailyRentalRate[i][j]*daysRented[i][j]}.`)
            }

        }

    }
}

carsAvailable = function() {
    
    for (i=0; i < carManufacturers.length; i++) {
        console.log(`Currently the following ${carManufacturers[i]} cars are available:`)

        for (j=0; j< carAvailability[i].length; j++) {

            if (carAvailability[i][j] === true) {
                console.log(carModels[i][j])
            }

        }
        console.log('\n');

    }
}
    
carReport = function() {

    carsRented()

    console.log('\n')
    
    carsAvailable()
        
}

carReport()

// Create a function that specifies type of car they want to rent & number of days they want to rent it