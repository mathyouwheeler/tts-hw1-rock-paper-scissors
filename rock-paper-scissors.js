var playerOneName = "Matthew";
var playerTwoName = "Edwin";

var playerOneWins = 0;
var playerTwoWins = 0;

var gameIsWon = false;
var roundCount = 0;

while(!gameIsWon) {
	roundCount++;
	//console.log("roundCount= " + roundCount);

	var playerOneHand = parseInt(Math.random()*10)%3;
	var playerTwoHand = parseInt(Math.random()*10)%3;
	console.log("Round " + roundCount + " " + playerOneName + " " + playerOneHand);
	console.log("Round " + roundCount + " " + playerTwoName + " " + playerTwoHand);
	
	if ((playerOneHand === 0 && playerTwoHand === 0) || (playerOneHand === 1 && playerTwoHand === 1) || (playerOneHand === 2 && playerTwoHand === 2)) {
		console.log("Round " + roundCount + " is a draw");
	}

	if ((playerOneHand === 0 && playerTwoHand === 1) || (playerOneHand === 1 && playerTwoHand === 2) || (playerOneHand === 2 && playerTwoHand === 0)) {
		console.log("Round " + roundCount + " winner is= " + playerTwoName);
		playerTwoWins++;
	}

	if ((playerOneHand === 0 && playerTwoHand === 2) || (playerOneHand === 1 && playerTwoHand === 0) || (playerOneHand === 2 && playerTwoHand === 1)) {
		console.log("Round " + roundCount + " winner is= " + playerOneName);
		playerOneWins++;
	}

	if (playerOneWins === 3 || playerTwoWins === 3) {
		gameIsWon = true;

		if (playerOneWins === 3) {
			console.log("Game Over! " + playerOneName + " wins the game!");
		} else {
			console.log("Game Over! " + playerTwoName + " wins the game!");
		}	
	}

}