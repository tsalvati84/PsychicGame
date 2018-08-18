var hello = ("Hello, welcome to my game!");
var rules = ("Guess the letter and win!!");
var loststr = ("Game Over! Try again");
alert(hello);
alert(rules);

  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];


  for (let i = 0; i < letter.length; i++) {
      console.log("letters");

  }

  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var guessedLetters = [];
  var playerGuess;
  var computerGuess;
  var computerPick;

   function reset() {
          totalGuesses = 9;
          guessesLeft = 9;
          guessedLetters = [];
          computerPick = letter[Math.floor(Math.random() * letter.length)];
      console.log(computerPick);
          

          }
  
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  
  
  window.onload = function(){
  computerPick = letter[Math.floor(Math.random() * letter.length)];
      console.log(computerPick);
}
 document.onkeyup = function(event) {
      playerGuess = event.key;
      if (guessedLetters.indexOf(playerGuess) === -1){
     guessedLetters.push(playerGuess);
     document.getElementById("guessedLetters").innerHTML = guessedLetters.join("");
      }
     if (playerGuess === computerPick) {
          wins++;
          guessesLeft = 9;
          
          document.getElementById('wins').innerHTML = wins;
          reset();
     }
      else {
          guessesLeft--;
          if (guessesLeft === 0){
          losses++;
          alert(loststr);
          document.getElementById('losses').innerHTML = losses;
          reset();
      }
      document.getElementById('guessesLeft').innerHTML = guessesLeft;  
      }
      
      
      
      
 }