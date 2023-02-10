let colours = ["green", "red", "yellow", "blue"];

let gamePattern = [];

function selectRandomColor() {
  let number = Math.floor(Math.random() * 4);
  let randomChosenColour = colours[number];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  let audio;
  switch (randomChosenColour) {
    case "green":
      audio = new Audio("sounds/" + randomChosenColour + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;

    case "red":
      audio = new Audio("sounds/" + randomChosenColour + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;

    case "yellow":
      audio = new Audio("sounds/" + randomChosenColour + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;

    case "blue":
      audio = new Audio("sounds/" + randomChosenColour + ".mp3");
      audio.volume = 0.2;
      audio.play();
      break;
    default:
      break;
  }
  return number;
}
