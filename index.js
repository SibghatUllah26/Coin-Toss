var i=0;
var j=0;
var k=0;
document.querySelector(".btn").addEventListener("click",function(){
  var audio = new Audio("media/audio.mp3");
  audio.play();
  var randomNumber = Math.floor(Math.random()*2);
  if(randomNumber===1){
    var side = "media/H.png";
    document.querySelector("img").setAttribute("src",side);
    document.querySelector("h1").innerHTML=" It's a Head ✌️"
    var totalHead = ++j;
    document.querySelectorAll("h2")[0].innerHTML = "Total Head = " + totalHead;
  }else {
    var side = "media/T.png";
    document.querySelector("img").setAttribute("src",side);
    document.querySelector("h1").innerHTML=" ✌️ It's a Tail "
    var totalTail = ++k;
    document.querySelectorAll("h2")[2].innerHTML = "Total Tail = " + totalTail;
  }
  var count = ++i;
  document.querySelectorAll("h2")[1].innerHTML = "Total Toss = " + count;

});
