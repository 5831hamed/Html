function send(events){
    event.preventDefault();

}







function send(event) {

    event.preventDefault();

    let birthdayField = document.getElementById("birthday");
    let emailField = document.getElementById("email");
    let typeField = document.getElementById("type");
    let usageField = document.getElementById("usage");
    let bodyField = document.getElementById("body");

    let birthday = birthdayField.value;
    let email = emailField.value;
    let type = typeField.value;
    let usage = usageField.value;
    let body = bodyField.value;

    console.log(birthday);
    console.log(email);
    console.log(type);
    console.log(usage);
    console.log(body);

    let dialog = document.getElementById("dialog");
    dialog.close();
}
