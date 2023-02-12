let colors = ["green", "red", "yellow", "blue"];

let gamePattern = [];
let userClickedPattern = [];
let hasGameStarted = false;
let level = 0;


//Detect keypress to start the game
$(document).keypress(function() {
  if(!hasGameStarted) {
    selectRandomcolor();
    hasGameStarted = true;
  }
})

//Detecting and Registering user button clicks
$("div[type=button]").click(function(evt) {
  let userChosenColor = evt.target.id;
  userClickedPattern.push(userChosenColor);

  //On click animation
  playSoundEffect(evt.target.id);
  animateClickedButton(evt.target.id);


  checkAnswer(userClickedPattern.length-1);
});


function selectRandomcolor() {
  let number = Math.floor(Math.random() * 4);
  let randomChosencolor = colors[number];
  gamePattern.push(randomChosencolor);

  //On click button animation
  $("#" + randomChosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSoundEffect(randomChosencolor);
  
  $("h1").text("Level " + level);
  level++;
  //console.log(number);
}


function checkAnswer(currentIndex) {
  if(gamePattern[currentIndex] === userClickedPattern[currentIndex]) {
    if(currentIndex === gamePattern.length-1) {
      setTimeout(function() {
        selectRandomcolor();
      }, 1000)
      userClickedPattern = [];
    }
  } else {

    playSoundEffect("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over!!!");
    setTimeout(() => {
      $("body").removeClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");
    }, 500);

    //resetting game configs
    gamePattern = [];
    userClickedPattern = [];
    hasGameStarted = false;
    level = 0;
  }
}


//On click effects
function animateClickedButton(color) {
  $("#"+color).addClass("pressed");
  setTimeout(function() {
    $("#"+color).removeClass("pressed");
  }, 100);
} 

function playSoundEffect(color) {
  let audio;
  audio = new Audio("sounds/" + color + ".mp3");
      audio.volume = 0.2;
      audio.play();
}