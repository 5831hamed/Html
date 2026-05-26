//so we make a list here 
let list = ["Tehtävä 1", "Tehtävä 2"];

//we make a function to update the list
function updatelist() {
    //we get the elemnt by id here and saved it in varible ul like always broooo
    let ul = document.getElementById("hamed");
    //we can clear the list with this
    ul.innerHTML = "";
    //we loop through the list and add the items to the list basiclly it goes thgough the list one by one
    for (let i = 0; i < list.length; i++) {
        //with this we can create a new element in li and we can add the item to the list with this
        let li = document.createElement("li");
        li.innerHTML = list[i];
        ul.appendChild(li);
    }
}

function add() {
    let input = document.getElementById("yaraslav");
    let arvo = input.value;

    // get the number input and convert it to an actual number
    let countInput = document.getElementById("maara");
    let count = parseInt(countInput.value);

    // push the text into the list 'count' times
    for (let i = 0; i < count; i++) {
        list.push(arvo);
    }

    updatelist();
    input.value = "";
    countInput.value = 1;
}

updatelist();