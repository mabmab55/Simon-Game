let colors = ["green", "red", "yellow", "blue"];

let gamePattern = [];
let userClickedPattern = [];

function selectRandomcolor() {
  let number = Math.floor(Math.random() * 4);
  let randomChosencolor = colors[number];
  gamePattern.push(randomChosencolor);

  //Flash animation
  $("#" + randomChosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSoundEffect(randomChosencolor);
  return number;
}

function playSoundEffect(color) {
  let audio;
  switch (color) {
    case "green":
      audio = new Audio("sounds/" + color + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;

    case "red":
      audio = new Audio("sounds/" + color + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;

    case "yellow":
      audio = new Audio("sounds/" + color + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;

    case "blue":
      audio = new Audio("sounds/" + color + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;
    default:
      break;
  }
}

$("div[type]").click(function(evt) {
  let userChosenColor = evt.target.id;
  userClickedPattern.push(userChosenColor);
});