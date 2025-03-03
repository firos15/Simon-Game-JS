var colors=["green", "red", "yellow", "blue"];

var started=false;
var computer=[];
var human=[];
var level=0;


$(document).keypress(function(){
  if(!started)
      {
        nextSeq();
        $("#level-title").text("Level:"+level);
        started=true;
      }
});



$("div[type='button']").click(function()
  {
  var btton= $(this);
  btton.addClass("pressed");
  setTimeout(function(){ btton.removeClass("pressed"); }, 100);
  var userClickColor=(btton.attr("id"));
  human.push(userClickColor);
  playSound(userClickColor);

  checkAns(human.length-1)
}
);

function nextSeq(){
human=[];
level++;
$("#level-title").text("Level:"+level);
var seq=Math.floor((Math.random()*4));
var randomColor= colors[seq];
computer.push(randomColor);
$("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomColor);
}

function checkAns(cLevel){
  if(computer[cLevel]===human[cLevel]){
    if(human.length===computer.length)
      {
        setTimeout(function(){nextSeq()},1000);
      }
  }
  else{
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){$("body").removeClass("game-over")},200);
      $("#level-title").text("Game Over..Press any key to restart.");
      startover();
      }
}

function playSound(item){
  var item= new Audio("./sounds/"+item+".mp3");
  item.play();
}

function startover(){
  started=false;
  level=0;
  computer=[];
  
}
