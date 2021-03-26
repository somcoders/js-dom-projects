let darkModeBtn = document.getElementById('darkModeBtn');
let input = document.getElementById('password');

darkModeBtn.addEventListener('click',function(e){
    input.type == "password" ? input.type = "text"
                : input.type = "password";
})
