let darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('mouseover',function(){
    document.body.style.background = "#ff0"; //press
})

darkModeBtn.addEventListener('mouseleave',function(){
    document.body.style.background = "#444"; //release
})
