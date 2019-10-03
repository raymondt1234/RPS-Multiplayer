let player1 = ["Player 1", ""];
let player2 = ["Player 2", ""];

let rps = ["paper", "rock", "scissors"];


function findWinner(player1, player2) {
    let result = rps.indexOf(player1[1]) - rps.indexOf(player2[1]);

    if (result === -1 || result === 2) {
        return player1[0];
    } else if (result === 1 || result === -2) {
        return player2[0];
    } else {
        return "Draw"
    }
}

function testFindWinner() {
    player1[1] = rps[Math.floor(Math.random() * 3)];
    player2[1] = rps[Math.floor(Math.random() * 3)];

    console.log("Test Find Winner function");

    console.log(`${player1[0]} picks ${player1[1]}`);
    console.log(`${player2[0]} picks ${player2[1]}`);

    let winner = findWinner(player1, player2);

    if (winner === "Draw") {
        console.log(winner);
    } else {
        console.log(`${winner} is the winner!`);
    }

    console.log("end of Test...");

    player1 = ["Player 1", ""];
    player2 = ["Player 2", ""];

}

testFindWinner();

$(document).ready( function(){
    
    $(".active-p1-Btn").on("click", function(){
        $(".active-p1-Btn").attr("class", "inactive-p1-Btn");
        player1[1] = $(this).attr("value");
        
        console.log();
        console.log(`Player 1 picked ${player1[1]}`);
    });

    $(".active-p2-Btn").on("click", function(){
        $(".active-p2-Btn").attr("class", "inactive-p2-Btn");
        player2[1] = $(this).attr("value");
        
        console.log();
        console.log(`Player 2 picked ${player2[1]}`);
    });
});
