let exercise3x = 200;
let exercise3y = 200;

function game3Preload(){

}

function game3Setup(){
   background(220);
  currentActivity = 3;
  
}

function game3Draw(){
  clear();
  background("#fadac1");

}
var inGame = false;
var currentWord, amountOfErrors, goodAnswers, previousWord;
var timer, time;


$(document).ready(function() {
  //Check if enter is pressed
  $(document).keypress(function(e) {
      if(e.which == 13) {
          enterWord();
      }
  });

  $("#startBtn").click(function () {
    //Start the game when user clicks
    startGame();
    $("#startBtn").hide();
  })

});


function startGame() {
  //Initialize start
  inGame = true;
  document.getElementById("wordField").focus();

  //Reset all variables
  amountOfErrors = 0;
  corrections = 0;
  goodAnswers = 0;
  $("#currentWord").html("");
  $("#errors").html("");
  $("#wpm").html("");

  pickWord();

  //start the timer
  $("#timer").show();
  startTimer();


}

function stopGame () {

  //Stop the timer
  clearInterval(timer);
  $("#timer").hide();
  $("#startBtn").show();
  $("#wordField").val("");

  //Set game to stopped
  inGame = false;

  //Show player his results
  $("#currentWord").html("<strong>Done...</strong>");
  $("#errors").html('<strong>Amount of errors: '+amountOfErrors+'</strong>');
  $("#wpm").html('<strong>Words per minute: '+goodAnswers+'</strong>');

}

function startTimer() {

  //Reset timer back to 60 seconds
  time = 60;

  //Every 100ms the timer gets updated
  timer = setInterval(function () {
    if (time <= 0) {
      stopGame();
    }
    time = time +- 0.1;
    $("#timer").html("<strong>"+time.toFixed(2)+"</strong>")
  },100);

}

function enterWord () {
  //If player is not in game
  if (inGame == false) {
    //Do nothing
  } else if (inGame == true) { //Is in game
    
    checkWord();
  }
}

function checkWord () {
    var enteredWord = $("#wordField").val();

    //Check if the player typed the correct string
    if (enteredWord == currentWord) {
      //if true
      fadeColor("wordField", "backgroundColor", "rgb(43,234,81)");
      $("#wordField").val("");
      pickWord();
      goodAnswers++;
      previousWord = currentWord;

    } else {
      //if false
      amountOfErrors++;
      fadeColor("wordField", "backgroundColor", "rgb(234,43,43)");
    }
}
function pickWord () {

  //Checking how many words ther are in the array
  var aantalWoorden = woorden.length;
  //Amount of words + 1
  aantalWoorden = aantalWoorden + 1;

  //Pick a random number between the amount of words and 0
  var randomWord = Math.floor((Math.random() * aantalWoorden) + 0);

  //Select a random word from the array
  currentWord = woorden[randomWord];

  //Check if its not the same as previous word
  if (currentWord == previousWord || currentWord == undefined) {
    pickWord();
  } else {
    //Show the word
    $("#currentWord").html("<strong>"+currentWord+"</strong>");
  }
}

var woorden = ["value" , "meanwhile", "finally" , "base" , "spikes" ,"creature", "comforts" , "advanced" , "the snout" , "opposite", "the spoon" , "the dust cloud" , "scrape" , "natural" , "significantly" , "the hedgehog" , "create" , "offset" , "enlarge" , "treacherous" , "the direction" , "the culture" , "the territory", "the timetable"];


function fadeColor(id, property, color) {
    var oProperty = $('#'+id+'').css(property);

    $('#'+id+'').css(property, color);
    setTimeout(function() {
      $('#'+id+'').css(property, oProperty);
    },300);
}
