var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

function changeAlphabet(){
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
}

function startGame() {
    var msg = "";
    for (var i = 0; i < 10; i++) {
        var userGuess = prompt("Guess any letter from A-Z").toLowerCase();
        if (userGuess === computerChoice) {
            wins++;
            guesses--;
            changeAlphabet();
            console.log("wins: " + wins);
            msg = "You guessed correctly!!" + " wins: " + wins + " losses: " + losses + " Guesses left: " + guesses;
            guessesSoFar.push(msg);
            alert(msg);
            
        } else if (userGuess !== computerChoice) {
            losses++;
            guesses--;
            console.log("losses: " + losses);
            msg = "You guessed it wrong. Try again!!" + " wins: " + wins + " losses: " + losses + " Guesses left: " + guesses;
            guessesSoFar.push(msg);
            alert(msg);
        }
        console.log("guesses: " + guesses);
        updateScore();
    }
    alert("Game Over");
    document.getElementById("history").innerHTML = guessesSoFar.join('<br>');
}

function updateScore() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
}