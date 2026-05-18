console.log("task4 page opened");

function send(event) {
    event.preventDefault();
    const birthdayField = document.getElementById("birthdate");
    const emailField = document.getElementById("email");
    const typeField = document.getElementById("Message-type");
    const usageField = document.getElementById("usage");
    const bodyField = document.getElementById("body");

    const birhday = birthdayField.value;
    const email = emailField.value;
    const type = typeField.value;
    const usage = usageField.value;
    const body = bodyField.value;
    
    console.log(birhday);
    console.log(email);
    console.log(type);
    console.log(usage);
    console.log(body);
}
