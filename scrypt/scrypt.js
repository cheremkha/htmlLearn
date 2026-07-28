console.log("hello Yurii") /* це мій перший
багаторядковий коментар*/
let age = 10;

let userLogin = prompt("Input your loggin: ")
let userPassword = null;
if(userLogin == "Admin") {
    userPassword = prompt("Password: ")
    if(userPassword == "God") {
        console.log("Hello, my God")
    } else if(userPassword == "" || userPassword == null) {
        console.log("Password canseled")
    } else {
        console.log("Ti kogo hoch noebati?")
    }
} else if(userLogin == null || userLogin == '') {
    console.log("Canseled!")
} else {
    console.log("I know all!")
}