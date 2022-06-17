// SORT THIS CAR DATA

const titles = ["id", "first_name", "last_name", "CarMake", "CarModel", "CarModelYear", "Codeab", "carCost"]

let rawData = [
[  "1", "Ichabod", "Weall", "Infiniti", "G", "2007", "0186-0510", "61339"], 
[  "2", "Boot", "MacGilmartin", "Lamborghini", "Countach", "1990", "0143-2260", "71987"], 
[  "3", "Etti", "Sicely", "Mercury", "Grand Marquis", "1999", "17089-075", "82151"], 
[  "4", "Moira", "Reaman", "MINI", "Cooper Clubman", "2010", "52584-348", "96079"], 
[  "5", "Romona", "Sumnall", "Suzuki", "XL-7", "2006", "59115-048", "55758"], 
[  "6", "Erie", "Upshall", "Mercury", "Montego", "2005", "24208-004", "33707"], 
[  "7", "Farley", "Comber", "Mazda", "Protege", "1996", "50114-6150", "90424"], 
[  "8", "Sebastien", "Grimmer", "GMC", "Envoy", "2008", "0093-3165", "26994"], 
[  "9", "Toddie", "Roote", "Mercedes-Benz", "W201", "1990", "66774-1001", "57026"], 
[  "10", "Royce", "Iredell", "Plymouth", "Colt Vista", "1992", "62045-4333", "70218"], 
[  "11", "Ruy", "Cockshutt", "GMC", "Sierra 3500", "2007", "50114-1180", "27320"], 
[  "12", "Tyson", "Jarratt", "BMW", "Z4", "2003", "58228-0104", "98940"], 
[  "13", "Dacy", "Boake", "Volkswagen", "Tiguan", "2010", "63824-182", "50652"], 
[  "14", "Archer", "Cornbell", "Nissan", "Altima", "2002", "55312-180", "70162"], 
[  "15", "Urban", "Rangell", "Mazda", "626", "1996", "49643-336", "74999"], 
[  "16", "Caroljean", "Sharp", "Mercedes-Benz", "E-Class", "1989", "0781-2824", "42488"], 
[  "17", "Ethelin", "Royste", "Lamborghini", "Diablo", "2001", "68016-189", "36742"], 
[  "18", "Engracia", "McPherson", "Buick", "Enclave", "2009", "10736-009", "38731"], 
[  "19", "Morgun", "Kinker", "Hyundai", "Elantra", "2003", "0904-6016", "50596"], 
[  "20", "Filippo", "Gothard", "Porsche", "Cayenne", "2011", "55513-144", "26768"], 
[  "21", "Henrietta", "Zaniolo", "Chevrolet", "Suburban", "2008", "57910-404", "48136"], 
[  "22", "Birgitta", "Norres", "Bentley", "Brooklands", "2010", "62211-267", "84098"], 
[  "23", "Lavena", "McColl", "GMC", "Savana 2500", "2003", "0054-0007", "40792"], 
[  "24", "Dosi", "Zack", "Mercedes-Benz", "S-Class", "1984", "52584-026", "54586"], 
[  "25", "Salem", "Dougary", "Chevrolet", "Silverado 1500", "2007", "52083-249", "62863"], 
[  "26", "Arleta", "Benneyworth", "GMC", "Yukon", "1992", "57520-0239", "84413"], 
[  "27", "Hailey", "Brookwood", "GMC", "Rally Wagon G3500", "1995", "44924-117", "55512"], 
[  "28", "Mikel", "Pardie", "Buick", "Century", "1984", "64117-969", "39812"], 
[  "29", "Francyne", "Kytter", "Lotus", "Elise", "2005", "24909-104", "78859"], 
[  "30", "Inesita", "Eley", "Toyota", "Camry", "2002", "47593-408", "77949"], 
[  "31", "Stuart", "Wakenshaw", "Isuzu", "Rodeo Sport", "2002", "37808-870", "29920"], 
[  "32", "Cale", "Moorey", "Chevrolet", "Suburban 1500", "1997", "55316-533", "64975"], 
[  "33", "Marrilee", "Pentony", "Nissan", "Titan", "2011", "49288-0781", "31424"], 
[  "34", "Murry", "Borsay", "Mazda", "MX-5", "1995", "52584-269", "44543"], 
[  "35", "Bobbe", "Corneljes", "Nissan", "Armada", "2005", "0113-0647", "43278"], 
[  "36", "Hortensia", "Dalmon", "Honda", "Civic", "2005", "50988-274", "29268"], 
[  "37", "Homere", "Morsley", "Mercedes-Benz", "CLK-Class", "1998", "64679-434", "29717"], 
[  "38", "Marne", "O'Scannill", "Volkswagen", "Jetta", "1992", "65321-020", "52497"], 
[  "39", "Mabelle", "Frisby", "Ford", "Probe", "1993", "49349-318", "62969"], 
[  "40", "Gretel", "Driscoll", "Acura", "Integra", "2001", "11701-066", "86069"], 
[  "41", "Craig", "Slessar", "Chevrolet", "G-Series G10", "1993", "54868-6157", "53196"], 
[  "42", "Pippy", "Olyet", "Mercury", "Grand Marquis", "1997", "52085-002", "78490"], 
[  "43", "Ker", "Quilliam", "Ford", "F-Series", "2005", "42023-144", "80459"], 
[  "44", "Sonny", "Catlette", "Plymouth", "Breeze", "1999", "37000-368", "35182"], 
[  "45", "Any", "Ferguson", "Ford", "Mustang", "1972", "68428-031", "70113"], 
[  "46", "Mario", "Minty", "Mercedes-Benz", "E-Class", "1993", "50988-407", "73988"], 
[  "47", "Thaine", "Alans", "Mercury", "Cougar", "1988", "66472-035", "70593"], 
[  "48", "Daron", "Leeuwerink", "Mitsubishi", "Galant", "1987", "63304-312", "78804"], 
[  "49", "Bernie", "Gatlin", "GMC", "Savana 3500", "1996", "55289-692", "97001"], 
[  "50", "Charmian", "Gladdor", "Buick", "Estate", "1990", "0904-6156", "65901"], 
[  "51", "Annette", "Fossick", "Acura", "MDX", "2002", "50914-7731", "89080"], 
[  "52", "Pavel", "Parkin", "Mazda", "Miata MX-5", "1993", "57955-1270", "52341"], 
[  "53", "Kerianne", "Fernez", "Jeep", "Liberty", "2004", "53329-010", "79931"], 
[  "54", "Vince", "Hakewell", "Buick", "Skylark", "1985", "75997-023", "83361"], 
[  "55", "Deena", "Rennolds", "Pontiac", "Bonneville", "1994", "0280-0925", "62517"], 
[  "56", "Rickert", "Schurig", "Saab", "9-3", "2001", "49349-406", "49796"], 
[  "57", "Lonnard", "Iacobetto", "Subaru", "Tribeca", "2011", "54868-1103", "25032"], 
[  "58", "Celestyn", "Macrae", "Chevrolet", "Suburban", "2011", "36987-2371", "90828"], 
[  "59", "Piper", "Bonafacino", "Dodge", "Ram 1500 Club", "1995", "51393-6989", "41217"], 
[  "60", "Norby", "Ruddle", "Nissan", "370Z", "2009", "42291-372", "98263"], 
[  "61", "Giustina", "Ostler", "GMC", "Envoy", "2003", "42549-561", "32447"], 
[  "62", "Rosina", "Afonso", "Chevrolet", "Suburban 2500", "2011", "0409-4332", "30971"], 
[  "63", "Janetta", "MacRonald", "Acura", "TL", "2005", "67345-0787", "81894"], 
[  "64", "Cindi", "Kas", "Ford", "Focus", "2013", "49852-003", "90267"], 
[  "65", "Torrance", "Couve", "Mercedes-Benz", "SLS AMG", "2012", "55754-123", "56335"], 
[  "66", "Martynne", "McSporrin", "Isuzu", "i-Series", "2007", "61957-0532", "81512"], 
[  "67", "Clemmy", "Romans", "Suzuki", "Vitara", "1999", "46017-024", "33503"], 
[  "68", "Onfroi", "Dispencer", "Chevrolet", "Cavalier", "1993", "53329-805", "41302"], 
[  "69", "Theo", "Leversuch", "Oldsmobile", "Ciera", "1994", "55118-430", "46207"], 
[  "70", "Sorcha", "Woltering", "Toyota", "RAV4", "2007", "50458-579", "88081"], 
[  "71", "Anallise", "Wegener", "Volvo", "XC90", "2011", "60512-9068", "79283"], 
[  "72", "Gabriel", "Broadist", "Jeep", "Wrangler", "2002", "0185-0649", "91855"], 
[  "73", "Perle", "Juanes", "Mercedes-Benz", "M-Class", "2010", "11822-3720", "55877"], 
[  "74", "Chance", "Howat", "Plymouth", "Breeze", "1996", "22700-141", "22345"], 
[  "75", "Oby", "Giocannoni", "Hyundai", "Accent", "2003", "49281-215", "75696"], 
[  "76", "Aurel", "McCoole", "BMW", "Z4 M", "2009", "67457-425", "23989"], 
[  "77", "Sanford", "Reneke", "Mazda", "B-Series", "2008", "76314-003", "74571"], 
[  "78", "Marcella", "Gozzett", "Toyota", "Sequoia", "2011", "59021-009", "53849"], 
[  "79", "Sib", "Pilgrim", "Toyota", "Sienna", "2008", "33261-868", "44806"], 
[  "80", "Jonas", "Yankeev", "Mercedes-Benz", "500E", "1992", "61957-0903", "80293"], 
[  "81", "Bary", "Dewes", "Acura", "MDX", "2003", "49738-369", "82196"], 
[  "82", "Alva", "Clohessy", "Chevrolet", "TrailBlazer", "2002", "0409-4031", "78414"], 
[  "83", "Errick", "MacVaugh", "Buick", "Regal", "1994", "58411-192", "52235"], 
[  "84", "Tracy", "Denty", "BMW", "7 Series", "2011", "41167-0952", "41132"], 
[  "85", "Abbott", "Hayball", "Nissan", "Altima", "2002", "41250-680", "70126"], 
[  "86", "Hugibert", "Dodgshun", "Chevrolet", "Cavalier", "1995", "65224-618", "46929"], 
[  "87", "Giacomo", "Dillingston", "Honda", "CR-V", "1998", "60258-526", "69634"], 
[  "88", "Lind", "Westpfel", "BMW", "5 Series", "2004", "24385-924", "93117"], 
[  "89", "Cathy", "Kurtis", "Toyota", "Camry", "1996", "53807-520", "82206"], 
[  "90", "Isobel", "Abbatini", "Scion", "xB", "2009", "42291-648", "25255"], 
[  "91", "Chrysler", "Klageman", "Mercury", "Grand Marquis", "1999", "37000-522", "40699"], 
[  "92", "Gennifer", "Stoute", "Ford", "Ranger", "2006", "54868-1791", "86706"], 
[  "93", "Jazmin", "McNirlan", "Lincoln", "Town Car", "2008", "0378-1813", "41938"], 
[  "94", "Wendy", "Giorgiutti", "Nissan", "Quest", "2004", "59779-991", "27718"], 
[  "95", "Cyb", "MacFarland", "Porsche", "Boxster", "1997", "10096-0302", "24817"], 
[  "96", "Grata", "Rignold", "Bentley", "Azure", "2007", "40057-1000", "82479"], 
[  "97", "Graeme", "O'Lochan", "Chevrolet", "Impala", "2008", "41163-652", "62027"], 
[  "98", "Calley", "O'Deegan", "Cadillac", "DeVille", "1999", "37205-328", "69248"], 
[  "99", "Edythe", "Greeding", "Honda", "Civic", "2007", "67024-001", "24711"], 
[  "100", "Ottilie", "Duprey", "Mazda", "Protege", "2002", "54868-5187", "54605"], 
] 

for (i=0; i < rawData.length; i++) {

    rawData[i][0] = parseInt(rawData[i][0])

    rawData[i][5] =  parseInt(rawData[i][5])

    let i6Data = rawData[i][6].split("-")
    rawData[i][6] = parseInt(i6Data[0] + i6Data[1])

    rawData[i][7] = parseInt(rawData[i][7])
}


// CREATE A STRUCTURE OF ARRAYS THAT ARE ORGANIZED BASED ON THE CAR MAKE. THIS PROGRAM SHOULD HAVE A MASTER ARRAY THAT CONTAINS THE NAMES OF THE CAR MAKES. NO NAMES SHOULD BE DUPLICATED
// NEXT YOU NEED TO CREATE ARRAY STRUCTURES FOR ALL THE OTHER DATA 

let masterArray = []

for (i=0; i < rawData.length; i++) {
    if (masterArray.includes(rawData[i][3])) {

    } else {
        masterArray.push(rawData[i][3])
    }
    
}

carMaker = function(carMake) {
    newArr = []
    for (i=0; i < rawData.length; i++) {
        if (carMake == rawData[i][3]) {
            newArr.push(rawData[i])
        }
    }
    return newArr
}
let fordCars = carMaker("Ford")
let infinitiCars = carMaker("Infiniti")
let lamboCars = carMaker("Lamborghini")
let mercuryCars = carMaker("Mercury")
let miniCars = carMaker("MINI")
let suzukiCars = carMaker("Suzuki")
let mazdaCars = carMaker("Mazda")
let gmcCars = carMaker("GMC")
let mercedesCars = carMaker("Mercedes-Benz")
let plymouthCars = carMaker("Plymouth")
let bmwCars = carMaker("BMW")
let vwCars = carMaker("Volkswagon")
let nissanCars = carMaker("Nissan")
let buickCars = carMaker("Buick")
let hyundaiCars = carMaker("Hyundai")
let porscheCars = carMaker("Porsche")
let chevyCars = carMaker("Chevrolet")
let bentleyCars = carMaker("Bentley")
let lotusCars = carMaker("Lotus")
let toyotaCars = carMaker("Toyota")
let isuzuCars = carMaker("Isuzu")
let hondaCars = carMaker("Honda")
let acuraCars = carMaker("Acura")
let mistsuCars = carMaker("Mitsubishi")
let jeepCars = carMaker("Jeep")
let pontiacCars = carMaker("Pontiac")
let saabCars = carMaker("Saab")
let subaruCars = carMaker("Subaru")
let dodgeCars = carMaker("Dodge")
let oldsCars = carMaker("Oldsmobile")
let volvoCars = carMaker("Volvo")
let scionCars = carMaker("Scion")
let lincolnCars = carMaker("Lincoln")
let cadillacCars = carMaker("Cadillac")

carData = function(indexx) {
    var newArray = []
    for (i=0; i < rawData.length; i++) {
        newArray.push(rawData[i][indexx])
    }
    return newArray
}

let carModels = carData(4)
let carModelYear = carData(5)
let carMakes = carData(3)
let carPrices = carData(7)
let carCodeAB = carData(6)
let carFirstName = carData(1)
let carLastName = carData(2)
let carID = carData(0)
