var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomSource="images/"+randomImage;
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",randomSource);
//end of dice 1 logic

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Won"
} else {
    document.querySelector("h1").innerHTML="Player 2 Won"
}