if(performance.getEntriesByType("navigation")[0].type==="reload"){
    rollDice();

}

function rollDice(){

var randomNumber1=Math.floor(Math.random()*6)+1;
var imgsrc1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imgsrc2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Jimmy wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Liha wins!";
}else{
    document.querySelector("h1").innerHTML="Roll again!";
}
}