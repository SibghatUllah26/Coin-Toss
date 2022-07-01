
document.querySelector(".btn").addEventListener("click",function(){
  var audio = new Audio("media/audio.mp3");
  audio.play();
  var randomNumber = Math.floor(Math.random()*2);
  if(randomNumber===1){
    var side = "media/H.png";
    document.querySelector("img").setAttribute("src",side);
    document.querySelector("h1").innerHTML=" It's a Head ✌️"
  }else {
    var side = "media/T.png";
    document.querySelector("img").setAttribute("src",side);
    document.querySelector("h1").innerHTML=" ✌️ It's a Tail "
  }

});
