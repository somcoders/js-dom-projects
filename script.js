let darkMode = document.querySelector("#darkMode");


function changeMode(){
    let body    =   document.body;
   body.classList.toggle("darkMode");
   body.classList.contains("darkMode") 
                    ?   darkMode.innerHTML = "🌙"
                    :  darkMode.innerHTML = "🌚"

}

darkMode.addEventListener("click",changeMode);