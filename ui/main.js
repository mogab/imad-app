console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Mera Duniya!";
element.onclick = function(){
    img.innerHTMl = 'Hello World!';
};
//Move image
var img = document.getElementById("madi");
img.onclick = function(){
    console.log("Image Clicked!");
    img.style.marginLeft = '150px';
};