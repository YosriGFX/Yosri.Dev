function show_hide() {
    var menu = document.getElementById('Menu');
    if (menu.classList.contains("hide")){
        menu.classList.remove("hide");
        setTimeout(function(){
          menu.style.display = 'block';
        }, 1);
    }
    else{
        menu.classList.add("hide");
        setTimeout(function(){
          menu.style.display = 'none';
        }, 2000);
    }
}
