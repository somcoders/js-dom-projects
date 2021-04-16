let postText   = document.querySelector("#postText");
let postLimit  = document.querySelector("#postLimit");
let postBtn    = document.querySelector("#postBtn");



function checkTextLimit(e) {
    charLimit   =    100;

    postLimit.innerHTML =  charLimit - postText.value.length + " Characters Left";

   if(postText.value.length  > charLimit){
       postBtn.disabled = true;
       postBtn.style.background = "grey";
       postLimit.style.color = "red";
   }else{
       postBtn.disabled = false;
       postBtn.style.background = "#55acce";
       postLimit.style.color = "black";
   }
}


postText.addEventListener("keyup",checkTextLimit);