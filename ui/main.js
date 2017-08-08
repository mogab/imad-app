console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Mera Duniya!";
element.onclick = function(){
    img.innerHTML = 'Hello World!';
};
//Move image
var img = document.getElementById("madi");
img.onclick = function(){
    img.style.marginLeft = '150px';
};