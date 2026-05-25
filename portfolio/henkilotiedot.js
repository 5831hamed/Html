// ── LIST OF PEOPLE ──────────────────────────────────────────────
// This is an array ([ ]) of objects ({ }).
// Each object is one person with 4 pieces of info.

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


// ── GRAB THE TBODY FROM HTML ─────────────────────────────────────
// document.querySelector finds the <tbody> element on the page.
// We save it in a variable called "rivit" so we can use it later.

let rivit = document.querySelector("tbody")


// ── FUNCTION THAT BUILDS THE TABLE ROWS ─────────────────────────
// We define a function called luoRivit (= "create rows" in Finnish).
// A function is a block of code that runs when we call it.

function luoRivit() {

    // First, clear the table body so we start fresh.
    // innerHTML = "" means: set the content to nothing (empty).
    rivit.innerHTML = ""

    // Loop through every person in the henkilot array.
    // forEach goes through each item one by one.
    // The word "henkilo" represents one person at a time.
    henkilot.forEach(function(henkilo) {

        // Create a new <tr> element (a table row).
        // This row doesn't appear on the page yet — it's just in memory.
        let rivi = document.createElement("tr")


        // ── NAME CELL ──
        // Create a <td> (table data cell) for the name.
        let nimiSolu = document.createElement("td")
        // Set the content of the cell to the person's name.
        // henkilo.name reads the "name" key from the current person's object.
        nimiSolu.innerHTML = henkilo.name
        // Add the cell inside the row.
        rivi.append(nimiSolu)


        // ── AGE CELL ──
        // Same idea: create a cell, fill it with the age, add it to the row.
        let ikiSolu = document.createElement("td")
        ikiSolu.innerHTML = henkilo.age
        rivi.append(ikiSolu)


        // ── JOB CELL ──
        let tyoSolu = document.createElement("td")
        tyoSolu.innerHTML = henkilo.job
        rivi.append(tyoSolu)


        // ── DRIVERS LICENSE CELL ──
        // driversLicense is true or false (a boolean).
        // We use an if/else to show a nice green "Kyllä" or red "Ei" badge
        // instead of just showing "true" or "false".
        let korttiSolu = document.createElement("td")

        if (henkilo.driversLicense === true) {
            // If they have a license, show a green badge
            korttiSolu.innerHTML = '<span class="license-yes">Kyllä</span>'
        } else {
            // If they don't, show a red badge
            korttiSolu.innerHTML = '<span class="license-no">Ei</span>'
        }

        rivi.append(korttiSolu)


        // ── ADD THE FINISHED ROW TO THE TABLE ──
        // Now that all 4 cells are inside the row,
        // we add the row to the <tbody> (which we saved as "rivit").
        // This is what makes it actually appear on the page!
        rivit.append(rivi)

    }) // end of forEach loop

} // end of luoRivit function


// ── RUN THE FUNCTION ─────────────────────────────────────────────
// The function is defined above, but it only runs when we CALL it.
// This one line triggers everything when the page loads.

luoRivit()