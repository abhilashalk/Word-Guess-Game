function myfunction(){
    var word = ["pudding" , "icecream" , "cake"];
  
  
  // Create another array to store good guesses
  var secret = [];
  //array for bad guessed alphabets
  var res = [];
  //Array for all guessed alphabets.
  var tt = [];
  // Create a variable to store the number of bad guesses
  var strikes = 0;
  var win = 0;
  
  
  computerChoice = word[Math.floor(Math.random()  * (word.length))]
  // Fill this array with placeholders for guessing
  for (i = 0; i < computerChoice.length; i++) {
    secret.push("_");
  }
  
  // loop for max 3 wrong guesses
  while (strikes < 3 && secret.indexOf("_") >= 0) {
  
    // Prompt Player to guess a letter and store as
    // a variable.
    var letter = prompt(secret.join(" ") + "\n\n" + "Guess the Dessert.!.");
    //Store the alphabets into all guessed letters
    var tt = tt.concat(letter);
    //display the all guessed letters
    document.getElementById("demo").innerHTML = tt;
  
    // If the letter does not exist in the word,
    // add it to the bad guesses.
    if (computerChoice.indexOf(letter) < 0) {
      //store the bad guessed letters to bad guess array
       var res = res.concat(letter);
       //Display the bad guessed
      document.getElementById("wrong-letter").innerHTML = res;
      // add a strike
      strikes++;
      alert("Bad guess!");
    
  
    // If the letter exists in the word, we need to
    // add it to the good guesses array
    } else {
      for (i = 0; i < computerChoice.length; i++) {
        
        // add good guesses to good guess array indexes
        if (computerChoice[i] === letter) {
          secret[i] = letter;
        }
      }
    }
  }
  
  // Once the player has exited the loop, congratulate
  // them on a win, or tell them they have lost and show
  // the secret word.
  if (strikes === 3) {
   //Display failed attempt message
   document.getElementById("alert1").innerHTML = "Sorry, please play again!";
   //reset both arrays.
    tt = [];
    res = [];
  
  } else {
    //increment score
    win++;
    //display congrats message if wins
    document.getElementById("alert2").innerHTML = "Congratulations on your win!";
    //reset both arrays.
    tt = [];
    res = [];
    //display score
    document.getElementById("score").innerHTML = win;
  }
  //alert the correct guesses.
  alert("The secret word was " + computerChoice);
  //reset computer random picked word.
  computerChoice = [];
  }
  
  
