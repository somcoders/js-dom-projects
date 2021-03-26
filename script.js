let darkModeBtn = document.getElementById('darkModeBtn');
let body = document.body;

darkModeBtn.addEventListener('click',function(event){
    body.className == "normal" ? 
        body.className = "darkMode" : body.className  = "normal";
    event.target.innerHTML = "White";
})
