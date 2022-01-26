var randomNo1=Math.floor(Math.random()*6)+1;

var randomDiceImg="dice"+randomNo1+".png";

var randomImgSource="images/"+randomDiceImg;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource);




var randomNo2=Math.floor(Math.random()*6)+1;

var randomImgSource2="images/dice"+randomNo2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);




if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="BOOM!<br>Player1 wins!";
}
else if(randomNo1==randomNo2){
    document.querySelector("h1").innerHTML="OH!<br>Draw !";
}
else{
    document.querySelector("h1").innerHTML="BOOM!<br>Player 2 wins!";

}