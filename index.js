let colours = ["green", "red", "yellow", "blue"];

let gamePattern = [];

function selectRandomColor() {
  let number = Math.floor(Math.random() * 4);
  let randomChosenColour = colours[number];
  gamePattern.push(randomChosenColour);
  //Flash animation
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSoundEffect(randomChosenColour);
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