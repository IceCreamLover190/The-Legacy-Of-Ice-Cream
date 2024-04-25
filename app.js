let tekst = document.querySelectorAll("h2")
let dugme = document.getElementById("dugm")
let bgr = document.getElementById("bod")
let b;
//let siz = 30;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
/*function kliknuto(){
    bgr.style.backgroundPositionX += 5;
    bgr.style.backgroundPositionY += 6;
} */


//dugme.onclick = function(){};
function kliknuto(){
    b = getRandomInt(3);
    switch(b){
        case 0:
            for (let i = 0; i < tekst.length; i++) {
                tekst[i].style.color = "blue";
              }  
            break;
        case 1:
            for (let i = 0; i < tekst.length; i++) {
                tekst[i].style.color = "green";
              }  
            break;    
        case 2:
            for (let i = 0; i < tekst.length; i++) {
                tekst[i].style.color = "yellow";
                }  
            break;    
    }
    console.log(b)
}
/*
while(true){
    setTimeout(kliknuto(), 1000);
}/*
/*
function kliknuto(){
    siz += 30;
    tekst[1].style.fontSize = '$(siz)px';
}*/
