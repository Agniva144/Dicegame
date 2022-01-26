var randomNo=Math.floor(Math.random()*6)+1;

var randomDiceImg="dice"+randomNo+".png";

var randomImgSource="images/"+randomDiceImg;

var image=document.querySelectorAll("img")[0];

image.setAttribute("src",randomImgSource);


document.querySelector("h1").innerHTML="You Result: "+randomNo;