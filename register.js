console.log("Hello World", 43, 409.23, true, false,
["banana", "apple", "orange"]);

console.log(typeof("Hello World."), typeof(34234),
typeof(["banana"]))

// number = 12345, 40.2, 60.4
// string = "asd", "lmkzhxch", "234"
// boolean = true, false
// object = Arrau[],JSON {....}

let btnRegister = document.querySelector("#btnRegister");
let txtUsername = document.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPassword");
let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
let txtAge = document.querySelector("#txtAge");

btnRegister.onclick = function(){
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value, txtAge.value);
}

function register (password, username, confirmPassword, age){
    console.log(password, username, confirmPassword, age);

}