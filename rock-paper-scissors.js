//- Store the player names and number of wins for each player in variables
var playerOneName = "Matthew";
var playerTwoName = "Edwin";

var playerOneWins = 0;
var playerTwoWins = 0;

var gameIsWon = false;
var roundCount = 0;

// - Use a while loop to run the game until one player has 3 wins-
while(!gameIsWon) {
	// run game
	var playerOneHand = parseInt(Math.random()*10)%3;
	var playerTwoHand = parseInt(Math.random()*10)%3;
	console.log("playerOneHand= " + playerOneHand);
	console.log("playerTwoHand= " + playerTwoHand);
	
	if (playerOneHand === 0 && playerTwoHand === 0) {
		console.log("draw");
	}
	if (playerOneHand === 0 && playerTwoHand === 1) {
		console.log("playerTwoWinsRound =" + playerTwoName);
		playerTwoWins++;
	}
	if (playerOneHand === 0 && playerTwoHand === 2) {
		console.log("playerOneWinsRound =" + playerOneName);
		playerOneWins++;
	}
	if (playerOneHand === 1 && playerTwoHand === 0) {
		console.log("playerOneWinsRound =" + playerOneName);
		playerOneWins++;
	}
	if (playerOneHand === 1 && playerTwoHand === 1) {
		console.log("draw");
	}
	if (playerOneHand === 1 && playerTwoHand === 2) {
		console.log("playerTwoWinsRound =" + playerTwoName);
		playerTwoWins++;
	}	
	if (playerOneHand === 2 && playerTwoHand === 0) {
		console.log("playerTwoWinsRound =" + playerTwoName);
		playerTwoWins++;
	}	
	if (playerOneHand === 2 && playerTwoHand === 1) {
		console.log("playerOneWinsRound =" + playerOneName);
		playerOneWins++;
	}	
	if (playerOneHand === 2 && playerTwoHand === 2) {
		console.log("draw");
	}	

	if (playerOneWins === 3 || playerTwoWins === 3) {
		gameIsWon = true;
	}

	if (playerOneWins === 3) {
		console.log(playerOneName + " wins!");
	}

	if (playerTwoWins === 3) {
		console.log(playerTwoName + " wins!");
	}

	roundCount++;
	console.log("roundCount= " + roundCount);
}

// - Use parseInt(Math.random()*10)%3 to generate a number between 0 and 2 (0 == rock, 1 == paper, 2 == scissors)
// - Output each players hand to the console
// - Use if or switch statement to determine a winner of the round
// - Output the round winner's name to the console.
// - Keep track of how many rounds each player has won
// - When one player wins 3 rounds, announce that player's name as the game winner.