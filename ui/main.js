console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Mera Duniya!";

//Move image
var img = document.getElementById("madi");
img.oClick = function(){
    img.style.marginleft="100px";
};