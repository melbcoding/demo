console.log("we out here!");
let firstName = document.forms["register"]["fname"].value;
let lastName = document.forms["register"]["lname"].value;
let email = document.forms["register"]["email"].value;
let password = document.form["register"]['pword'].value;
let confPassword = document.forms["register"]["confPword"].value;



function validateForm(element) {
    console.log(element.id.value)
    if(element.id.value = "register")
    if (firstName == "") {
    alert("Name must be filled out");
    return false;
    }
}
