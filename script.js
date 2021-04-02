let passToggler = document.querySelector("#passToggler");
let inputPass   = document.querySelector("#password");

    function showPass(){
     inputPass.type = "text";
    }
    function hidePass(){
     inputPass.type = "password";
    }


    passToggler.addEventListener("mousedown",showPass);
    passToggler.addEventListener("mouseup",hidePass);