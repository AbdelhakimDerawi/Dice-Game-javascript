let player1Turn = true;
let player1Score = 0;
let player2Score = 0;
let gameIsFinished = false;

const dice = document.getElementById("diceImg");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const player1wins = document.getElementById("player1wins");
const player2wins = document.getElementById("player2wins");
const newGame = document.getElementById("newGame");
const playerOneScore = document.getElementById("player1");
const playerTwoScore = document.getElementById("player2");


function rollDice(){
    if(!gameIsFinished){
        let randomNumber = Math.floor(Math.random() *6)+1;
        document.getElementById("diceImg").src = "./dice"+String(randomNumber)+".png";
        if(randomNumber === 1){
            changePlayerTurn();
        }else{
            addScore(randomNumber);
        }
    }
}

function addScore(randomResult){
    if(player1Turn){
        player1Score = player1Score + randomResult;
        playerOneScore.innerHTML = String(player1Score);
        checkGameEnds(player1Score);
    }else{
        player2Score = player2Score + randomResult;
        playerTwoScore.innerHTML = String(player2Score);
        checkGameEnds(player1Score);
    }
}

function startNewGame(){
        player1Turn = true;
        player1Score = 0;
        player2Score = 0;
        playerOneScore.innerHTML = String(player1Score);
        playerTwoScore.innerHTML = String(player2Score);
        dice.src = "./dice1.png";
        player1wins.innerHTML = "";
        player2wins.innerHTML = "";
}

function changePlayerTurn(){
    if(player1Turn){
        player1Turn = false;
    }else{
        player1Turn = true;
    }
}

function checkGameEnds(totalScore){
    if(totalScore >= 30){
        gameIsFinished = true;
        if(player1Score > player2Score){
            player1wins.innerHTML = "Player 1 wins"
        }else{
            player2wins.innerHTML = "Player 2 wins"
        }
    }
}

roll.addEventListener("click" ,rollDice,false);
newGame.addEventListener("click" ,startNewGame,false);
hold.addEventListener("click" ,changePlayerTurn,false);