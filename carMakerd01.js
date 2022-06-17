const titles = ["id", "firstName", "lastName", "carModel", "carModelYear", "carMake", "carID", "carMileage"]

const newData = [

["1",	"Fonzie",	"Gammie",	"CLS-Class",	"2007",	"Mercedes-Benz",	"764-41-7717",	"42654"],
["2",	"Georgie",	"Borless",	"Impreza",	"2012",	"Subaru",	"678-54-6094",	"43606"],
["3",	"Eleni",	"Babar",	"Liberty",	"2003",	"Jeep",	"620-47-0298",	"94957"],
["4",	"Mariann",	"Brand",	"Nitro",	"2007",	"Dodge",	"826-09-8686",	"63440"],
["5",	"Tomi",	"Powys",	"Express 3500",	"2005",	"Chevrolet",	"520-46-5688",	"21264"],
["6",	"Randolf",	"Spencock",	"Cougar",	"1992",	"Mercury",	"295-62-5966",	"32260"],
["7",	"Sallyann",	"Lummasana",	"Aura",	"2009",	"Saturn",	"695-14-5753",	"32568"],
["8",	"Mavis",	"Iggalden",	"C8 Double 12 S",	"2006",	"Spyker",	"478-98-5136",	"99161"],
["9",	"Benedetto",	"Grigorio",	"VUE",	"2009",	"Saturn",	"438-94-3465",	"9340"],
["10",	"Rosaleen",	"Hazelby",	"ES",	"2007",	"Lexus",	"224-97-3081",	"99173"],
["11",	"Cyrille",	"Toffolo",	"Montero Sport",	"1999",	"Mitsubishi",	"453-92-6187",	"58198"],
["12",	"Gipsy",	"Lemarie",	"F150",	"1998",	"Ford",	"343-51-4988",	"98761"],
["13",	"Brett",	"Magrane",	"Land Cruiser",	"1996",	"Toyota",	"216-91-4948",	"48698"],
["14",	"Wilt",	"Thuillier",	"Passport",	"1994",	"Honda",	"703-87-5633",	"57361"],
["15",	"Linzy",	"Blacklidge",	"Sundance",	"1992",	"Plymouth",	"163-05-5811",	"71884"],
["16",	"Tiffanie",	"Phizackarley",	"Bravada",	"1998",	"Oldsmobile",	"229-19-8170",	"14182"],
["17",	"Ricky",	"Hopfer",	"SRX",	"2006",	"Cadillac",	"245-15-5180",	"32667"],
["18",	"Erda",	"Hiseman",	"Civic",	"2012",	"Honda",	"867-25-8575",	"39363"],
["19",	"Ban",	"Howship",	"LS",	"2010",	"Lexus",	"445-13-7607",	"18645"],
["20",	"Cami",	"McGuffie",	"TL",	"2010",	"Acura",	"227-38-3724",	"82647"],
["21",	"Mile",	"Bruyns",	"Navigator",	"2002",	"Lincoln",	"754-98-2920",	"35710"],
["22",	"Darbee",	"Boodle",	"Cooper",	"2011",	"MINI",	"302-74-5830",	"16780"],
["23",	"Vicki",	"Thay",	"Aero 8",	"2009",	"Morgan",	"679-23-0009",	"95360"],
["24",	"Ebony",	"Stileman",	"6 Series",	"1989",	"BMW",	"546-13-4979",	"15915"],
["25",	"Mady",	"MacAllaster",	"CL-Class",	"1998",	"Mercedes-Benz",	"590-26-2144",	"76832"],
["26",	"Lynnell",	"Conniam",	"Dakota Club",	"2003",	"Dodge",	"723-17-1815",	"48445"],
["27",	"Corena",	"Quinevan",	"Murciélago",	"2007",	"Lamborghini",	"844-12-0698",	"20065"],
["28",	"Mateo",	"Du Fray",	"E-Series",	"2011",	"Ford",	"382-17-8758",	"87681"],
["29",	"Lawrence",	"Calendar",	"9-3",	"2008",	"Saab",	"455-95-0817",	"41287"],
["30",	"Quill",	"Kinvig",	"GS",	"1997",	"Lexus",	"310-44-8204",	"15381"],
["31",	"Athene",	"Molyneaux",	"RX",	"2003",	"Lexus",	"402-45-6859",	"82609"],
["32",	"Edgardo",	"Faust",	"tC",	"2011",	"Scion",	"786-95-8589",	"17116"],
["33",	"Kingsly",	"Bernadzki",	"Avenger",	"2010",	"Dodge",	"127-80-3948",	"33249"],
["34",	"Ula",	"Derby",	"3000GT",	"1995",	"Mitsubishi",	"282-52-3635",	"43375"],
["35",	"Edithe",	"Greenway",	"740",	"1992",	"Volvo",	"444-97-4242",	"21944"],
["36",	"Clio",	"Tonkin",	"Sonata",	"2009",	"Hyundai",	"492-84-8718",	"86917"],
["37",	"Genvieve",	"Lamberteschi",	"G35",	"2008",	"Infiniti",	"459-02-0551",	"25248"],
["38",	"Celisse",	"Frowing",	"5000S",	"1988",	"Audi",	"649-80-7378",	"43819"],
["39",	"Jemmy",	"Kneeland",	"Tribeca",	"2008",	"Subaru",	"371-77-0592",	"17269"],
["40",	"Brinn",	"Gunn",	"Dakota Club",	"2005",	"Dodge",	"407-92-3823",	"31430"],
["41",	"Neddy",	"Buckie",	"Park Avenue",	"2001",	"Buick",	"537-55-6173",	"97028"],
["42",	"Bret",	"Herreran",	"5 Series",	"2005",	"BMW",	"866-18-6269",	"44249"],
["43",	"Jameson",	"Westmorland",	"A8",	"2003",	"Audi",	"734-27-8777",	"72641"],
["44",	"Engelbert",	"Capaldi",	"Sentra",	"2007",	"Nissan",	"639-64-0564",	"92510"],
["45",	"Jaquelyn",	"Wallbridge",	"FJ Cruiser",	"2012",	"Toyota",	"577-55-1295",	"72813"],
["46",	"Cairistiona",	"Loads",	"Highlander",	"2008",	"Toyota",	"693-47-5527",	"35534"],
["47",	"Gwendolyn",	"Delgadillo",	"B-Series",	"1989",	"Mazda",	"375-48-2862",	"96285"],
["48",	"Anneliese",	"Richen",	"Defender",	"1994",	"Land Rover",	"729-55-7524",	"89449"],
["49",	"Birk",	"Varker",	"A6",	"2012",	"Audi",	"770-12-8327",	"86816"],
["50",	"Lenka",	"Birdsey",	"Range Rover",	"1992",	"Land Rover",	"270-50-0113",	"86801"],
["51",	"Maurise",	"Akaster",	"Ram Van 2500",	"2003",	"Dodge",	"601-18-7191",	"67520"],
["52",	"Rubin",	"Ambresin",	"Element",	"2006",	"Honda",	"151-82-0141",	"63221"],
["53",	"Frank",	"Pawlyn",	"Pajero",	"2000",	"Mitsubishi",	"281-75-4187",	"40497"],
["54",	"Rick",	"Witul",	"Tracer",	"1997",	"Mercury",	"716-04-8224",	"18848"],
["55",	"Lynne",	"Orry",	"Imperial",	"1926",	"Chrysler",	"283-53-9712",	"6496"],
["56",	"Isiahi",	"Chuck",	"Caprice",	"1991",	"Chevrolet",	"148-26-2408",	"92133"],
["57",	"Annemarie",	"Onslow",	"2500",	"1999",	"GMC",	"845-82-6671",	"30879"],
["58",	"Ailis",	"Connett",	"Expedition",	"2002",	"Ford",	"678-22-7080",	"20511"],
["59",	"Libby",	"Bloggett",	"Golf",	"1983",	"Volkswagen",	"762-32-8310",	"77327"],
["60",	"Aloise",	"Swancock",	"Riviera",	"1991",	"Buick",	"777-89-0040",	"37046"],
["61",	"Yard",	"McOwen",	"Coupe GT",	"1987",	"Audi",	"284-46-0929",	"42095"],
["62",	"Giorgio",	"Baugh",	"RAV4",	"2010",	"Toyota",	"355-60-7283",	"18311"],
["63",	"Daron",	"Summerly",	"Passat",	"2009",	"Volkswagen",	"358-07-1797",	"45731"],
["64",	"Dinah",	"MacPake",	"QX56",	"2010",	"Infiniti",	"370-97-8436",	"72047"],
["65",	"Kacie",	"Petters",	"968",	"1993",	"Porsche",	"228-07-9944",	"30780"],
["66",	"Lucias",	"Kiwitz",	"Grand Am",	"2001",	"Pontiac",	"174-24-9737",	"75692"],
["67",	"Karoly",	"Maric",	"Firebird",	"1999",	"Pontiac",	"419-74-3046",	"22282"],
["68",	"Ivar",	"Philps",	"B-Series Plus",	"2002",	"Mazda",	"113-43-6202",	"6974"],
["69",	"Bran",	"Bubbins",	"G8",	"2009",	"Pontiac",	"760-54-3526",	"14229"],
["70",	"Dede",	"Lomath",	"7 Series",	"1996",	"BMW",	"491-42-3088",	"66117"],
["71",	"Germana",	"Baldry",	"Civic",	"1990",	"Honda",	"641-18-1418",	"64050"],
["72",	"Ilka",	"Reyburn",	"Mustang",	"1973",	"Ford",	"733-44-2125",	"92650"],
["73",	"Bobbee",	"Kurtis",	"Gallardo",	"2003",	"Lamborghini",	"780-59-0071",	"9829"],
["74",	"Keary",	"Bucktharp",	"Monte Carlo",	"2004",	"Chevrolet",	"470-69-0810",	"72208"],
["75",	"Redd",	"Elstob",	"Sparrow",	"1999",	"Corbin",	"367-27-4501",	"80924"],
["76",	"Derwin",	"Merriott",	"XLR",	"2005",	"Cadillac",	"601-72-6155",	"53371"],
["77",	"Irina",	"Lassey",	"Topaz",	"1989",	"Mercury",	"616-65-4092",	"34225"],
["78",	"Raffaello",	"Ree",	"CLK-Class",	"2006",	"Mercedes-Benz",	"149-85-4080",	"22942"],
["79",	"Vasily",	"Wolters",	"Yukon",	"2003",	"GMC",	"202-55-0813",	"67867"],
["80",	"Carie",	"Marian",	"Eclipse",	"2005",	"Mitsubishi",	"285-70-2613",	"20443"],
["81",	"Grove",	"Piddock",	"Breeze",	"1996",	"Plymouth",	"266-43-3368",	"53319"],
["82",	"Theresita",	"Kingsly",	"Explorer",	"1996",	"Ford",	"283-03-7888",	"12700"],
["83",	"Bendix",	"Clayhill",	"C-Class",	"2003",	"Mercedes-Benz",	"814-65-6114",	"98040"],
["84",	"Wendeline",	"Jacobbe",	"Crown Victoria",	"2001",	"Ford",	"610-60-4750",	"74664"],
["85",	"Gwennie",	"Cowdrey",	"Passat",	"1993",	"Volkswagen",	"368-19-3509",	"56029"],
["86",	"Bethany",	"Dowdell",	"Grand Voyager",	"1993",	"Plymouth",	"773-57-9293",	"65871"],
["87",	"Reggis",	"Tweedie",	"Grand Marquis",	"1986",	"Mercury",	"871-39-4057",	"32147"],
["88",	"Geoff",	"Begbie",	"F-Series",	"2002",	"Ford",	"332-01-4061",	"79746"],
["89",	"Karee",	"Butchart",	"LR4",	"2010",	"Land Rover",	"282-76-3238",	"68072"],
["90",	"Deanne",	"Heaton",	"Grand Caravan",	"2011",	"Dodge",	"448-33-5326",	"89991"],
["91",	"Sacha",	"Vondra",	"Jetta",	"1992",	"Volkswagen",	"589-23-9686",	"30847"],
["92",	"Dominica",	"Cavan",	"3500",	"1999",	"Chevrolet",	"852-57-0106",	"54910"],
["93",	"Lana",	"Jirek",	"Frontier",	"1998",	"Nissan",	"667-01-4487",	"46160"],
["94",	"Jermain",	"Pearsall",	"Safari",	"1997",	"GMC",	"383-09-0803",	"7217"],
["95",	"Booth",	"Shelford",	"Civic",	"1996",	"Honda",	"636-01-9185",	"46512"],
["96",	"D'arcy",	"Phillpotts",	"Touareg",	"2009",	"Volkswagen",	"670-44-3530",	"30563"],
["97",	"Renell",	"Crisp",	"500E",	"1992",	"Mercedes-Benz",	"677-35-7763",	"79444"],
["98",	"Ly",	"Sketch",	"Voyager",	"1995",	"Plymouth",	"481-63-5579",	"95953"],
["99",	"Julius",	"Riordan",	"Echo",	"2005",	"Toyota",	"839-54-1776",	"88115"],
["100",	"Grethel",	"Trenouth",	"RX-8",	"2005",	"Mazda",	"719-06-3922",	"28115"]
]

for (i=0; i < newData.length; i++) {
    newData[i][0] = parseInt(newData[i][0]) // number in list to numbers

    newData[i][4] = parseInt(newData[i][4]) //Model years to numbers

    i6Data = newData[i][6].split('-')
    
    newData[i][6] = parseInt(i6Data[0] + i6Data[1] + i6Data[2]) //car ID to numbers

    newData[i][7] = parseInt(newData[i][7]) //car mileage to numbers
}


let carMakes = []
let carModels = []

for (i=0; i < newData.length; i++) {
    if (carMakes.indexOf(newData[i][5]) == -1 ) {
        carMakes.push(newData[i][5])
        carModels.push()
    }
}


for (i=0; i < carMakes.length; i++) {
    for (j=0; j < newData.length; j++) {
        if (carMakes[i] == newData[j][5]) {

            carModels[i].push(newData[j])
        }
    }
}


//console.log(carModels)

getCarInfo = function(makeOfCar) {
    for (i=0; i < carMakes.length; i++) {
        if (carMakes[i] == makeOfCar) {
            // console.log(carModels[i])
            for (let j = 0; j < carModels[i].length; j++) {
                console.log(carModels[i][j][1], carModels[i][j][2], carModels[i][j][3], carModels[i][j][4]);
            }
        }
    }
}

getCarInfo("Mitsubishi")

console.log(carModels);