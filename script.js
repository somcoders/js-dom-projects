let passToggler     =   document.querySelector("#passwordToggler");
let passInput       =   document.querySelector("#password");


function showPassword() {
   passInput.type = "text";
}
function hidePassword() {
    passInput.type = "password";
}

passToggler.addEventListener("mousedown",showPassword);
passToggler.addEventListener("mouseup",hidePassword);