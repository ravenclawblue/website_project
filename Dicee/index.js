var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDiceImage="dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//for 2nd dice
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomDiceImage="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//logic for winner
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";

}
else{
    document.querySelector("h1").innerHTML="Match draw";
}