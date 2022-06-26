


var randomvariable1 = Math.floor(Math.random()*6);
var randomimg1 = "dice"+randomvariable1+".png" ;
var randomimgsrc =randomimg1;
var img1 = document.querySelectorAll('img')[0] ;
img1.setAttribute("src",randomimgsrc);


var randomvariable2 = Math.floor(Math.random()*6) ;
var randomimg2= "dice"+randomvariable2+".png" ;
var randomimgsrc =randomimg2;
var img2 = document.querySelectorAll('img')[1] ;
img2.setAttribute("src" , randomimgsrc) ;


if(randomvariable1>randomvariable2)
{
  document.querySelector("h1").innerHTML = "player 1 WINS !" ;
}
else if(randomvariable1<randomvariable2)
{
  document.querySelector("h1").innerHTML = "player 2 WINS !" ;
}
else
{
  document.querySelector("h1").innerHTML = " DRAW " ; 
}
