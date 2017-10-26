var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerLetter;

function startGame() {
    generateLetter();
    //show initial win, losses, and guessesleft values
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;    
}

document.onkeyup = function myFunction(event) {
    var letterGuessed = event.key;
    if (computerLetter == letterGuessed){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        guessesLeft = 9;
        generateLetter();
        clearGuessesString();        
    }
    else {
        if (guessesLeft == 1){
            losses++;
            document.getElementById("losses").innerHTML = losses;
            guessesLeft = 9;
            generateLetter();
            clearGuessesString();
        }
        else {
            guessesLeft--;
            //add this incorrect letter to an array
            guessesSoFar.push(letterGuessed);
        }
    }
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    //document.getElementById("sendbackLetter").innerHTML = letterGuessed; 
    document.getElementById("sendbackLetter").innerHTML = guessesSoFar;
}

function generateLetter(){
   computerLetter = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
   //alert("random letter: "+ computerLetter);
}

function clearGuessesString() {
    guessesSoFar = [];
}