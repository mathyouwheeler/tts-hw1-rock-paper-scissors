var player1Name = "Jon";
var player2Name = "Joe";
var player1Hand;
var player2Hand;
var player1WinCount = 0;
var player2WinCount = 0;
var gameRoundCount = 0;
var gameIsWon = false;
var hands = ["rock", "paper", "scissors"];

while (!gameIsWon) {
	player1Hand = generateHand();
	player2Hand = generateHand();
	determineRoundWinner(player1Hand, player2Hand);
}

function generateHand() {
	var idx = parseInt(Math.random()*10)%3;
	return hands[idx];
}

function determineRoundWinner(h1, h2) {
	var roundWinner;
	if (h1 === h2) {
		console.log("draw");
	} else if ((h1 === "rock" && h2 === "paper") || (h1 === "paper" && h2 === "scissor") || (h1 === "scissor" && h2 === "rock")) {
			console.log("Round " + gameRoundCount + " winner is= " + player2Name);
			player2WinCount++;
			roundWinner = player2Name;					
	} else {
		console.log("Round " + gameRoundCount + " winner is= " + player1Name);
		player1WinCount++;
		roundWinner = player1Name;		
	}
	isThereAGameWinner(roundWinner);
}

function isThereAGameWinner(rwn) {
	gameIsWon = player1WinCount === 3 || player2WinCount === 3;
	console.log((gameIsWon ? rwn + " has won the game!": "Game is not complete."));
}
