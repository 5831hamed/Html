// this is our list of people, each person is an object with 4 things
let henkilot = [
    {
        name: "Yousef Al-masri",
        age: 20,
        job: "Opiskelija",
        driversLicense: false
    },
    {
        name: "Yaroslav Koval",
        age: 20,
        job: "Hacker",
        driversLicense: true
    },
    {
        name: "Topi Saavalinen",
        age: 34,
        job: "Ohjelmistosuunnittelija",
        driversLicense: true
    },
    {
        name: "Kuba paskanen",
        age: 15,
        job: "Opiskelija",
        driversLicense: false
    },
    {
        name: "Tomas Täkäläinen",
        age: 16,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    },
]

let rivit = document.querySelector("tbody")

function luoRivit() {

    rivit.innerHTML = ""

    henkilot.forEach(function(henkilo) {

        let rivi = document.createElement("tr")

        let nimiSolu = document.createElement("td")
        nimiSolu.innerHTML = henkilo.name
        rivi.append(nimiSolu)

        // NEW: if age is 18 or more add beer emoji next to it
        let ikiSolu = document.createElement("td")
        if (henkilo.age >= 18) {
            ikiSolu.innerHTML = henkilo.age + " 🍺"
        } else {
            ikiSolu.innerHTML = henkilo.age
        }
        rivi.append(ikiSolu)

        // NEW: if job is Opiskelija add graduation cap emoji
        let tyoSolu = document.createElement("td")
        if (henkilo.job === "Opiskelija") {
            tyoSolu.innerHTML = henkilo.job + " 🎓"
        } else {
            tyoSolu.innerHTML = henkilo.job
        }
        rivi.append(tyoSolu)

        let korttiSolu = document.createElement("td")
        if (henkilo.driversLicense === true) {
            korttiSolu.innerHTML = '<span class="license-yes">Kyllä</span>'
        } else {
            korttiSolu.innerHTML = '<span class="license-no">Ei</span>'
        }
        rivi.append(korttiSolu)

        rivit.append(rivi)

    })

}

// NEW: this runs when submit button is pressed
function lisaaHenkilo() {

    // grab what the user typed in each field
    let nimi = document.getElementById("uusiNimi").value
    let ika = parseInt(document.getElementById("uusiIka").value)
    let tyo = document.getElementById("uusiTyo").value
    let ajokortti = document.getElementById("uusiAjokortti").checked

    // if age is negative show alert and stop
    if (ika < 0) {
        alert("Age must be a positive number")
        return
    }

    // make a new person object same structure as the others
    let uusiHenkilo = {
        name: nimi,
        age: ika,
        job: tyo,
        driversLicense: ajokortti
    }

    // add new person to the array
    henkilot.push(uusiHenkilo)

    // rebuild the table so new person shows up
    luoRivit()
}

luoRivit()