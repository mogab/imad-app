console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Mera Duniya!";
element.onclick = function(){
    element.innerHTML = 'Hello World!';
};
//Move image

var marginLeft = 10;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLef + "px";
}
var img = document.getElementById("madi");
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};