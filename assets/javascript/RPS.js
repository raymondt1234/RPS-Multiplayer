let player1 = ["Player 1", ""];
let player2 = ["Player 2", ""];

let rps = ["paper", "rock", "scissors"];

console.log(`index of rock: ${rps.indexOf("rock")}`);

function findWinner (player1, player2){
    let result = rps.indexOf(player1[1])-rps.indexOf(player2[1]);
    
    if (result === -1 || result === 2) {
        return player1[0];
    } else if (result === 1 || result === -2) {
        return player2[0];
    } else {
        return "Draw"
    }
}

function testWinnerFunc () {
    player1[1] = rps[Math.floor(Math.random() * 3)];
    player2[1] = rps[Math.floor(Math.random() * 3)];

    console.log(`${player1[0]} picks ${player1[1]}`);
    console.log(`${player2[0]} picks ${player2[1]}`);
    
    let winner = findWinner(player1, player2);

    if (winner === "Draw") {
    console.log(winner);
    } else {
        console.log(`${winner} is the winner!`);
    }
}

testWinnerFunc();
