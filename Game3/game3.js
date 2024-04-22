let currentWord = "";
let userInput = "";
let lastWordChange = 0;
let wordChangeDelay = 2000; // 2 seconds

function game3Preload() {

}

function game3Setup() {
  createCanvas(400, 400);
  background(220);
  currentActivity = 3;
  startGame();
}

function game3Draw() {
  clear();
  background("#fadac1");
  textAlign(CENTER);
  textSize(24);
  fill(0);
  text(currentWord, width / 2, height / 2);

  textSize(16);
  text(userInput, width / 2, height / 2 + 30);

  if (millis() - lastWordChange > wordChangeDelay) {
    startGame();
  }
}

function startGame() {
  currentWord = getRandomWord();
  userInput = "";
  lastWordChange = millis();
}

function checkWord() {
  if (userInput === currentWord) {
    startGame();
  }
}

function keyPressed() {
  if (keyCode >= 65 && keyCode <= 90) { // Check if the key is a letter
    userInput += key;
  } else if (keyCode === BACKSPACE) {
    userInput = userInput.slice(0, -1);
  } else if (keyCode === ENTER) {
    checkWord();
  }
}

function getRandomWord() {
  let words = ["hello", "world", "programming", "javascript", "challenge"];
  return random(words);
}