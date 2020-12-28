// Iniciar minhas variáveis

let board = ['', '', '','', '', '', '', '', ''];
let playerTurn = 0;
let symbols = ['O', 'X'];
let gameOver = false;

let winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let isPlayer0Winner = 0;
let isPlayerXWinner = 0;

function handleMove(position){
    if (gameOver) {
        return;
    }

    if (board [position] == ''){
        board[position] = symbols[playerTurn];

        gameOver = isWin();
        
        if (gameOver == false){
            playerTurn = (playerTurn == 0) ? 1 : 0;
        } 
    }

    return gameOver;          
}

function isWin(){
    
    for (let i=0; i<winState.length; i++){
        let seq = winState[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
                
            return true;
        } 
    }
        
    return false;
}


function scoreCalc0(){

    if (gameOver == true && playerTurn == 0){   
        isPlayer0Winner = isPlayer0Winner+1 
        
        let msg1 = document.getElementById("info-message")
        msg1.innerHTML = `<p>Fim de Jogo... <br> O vencedor foi o <span id="jogador">Jogador O.<span><p>`
        document.getElementById("jogador").style.color = "blue"
        // document.getElementById("jogador").style.backgroundColor = "blue"
    }

    return isPlayer0Winner
}

function scoreCalcX(){
    
    if (gameOver == true && playerTurn == 1){
        isPlayerXWinner = isPlayerXWinner+1

        let msg2 = document.getElementById("info-message")
        msg2.innerHTML = `<p>Fim de Jogo... <br> O vencedor foi o <span id="jogador">Jogador X.<span><p>`
        document.getElementById("jogador").style.color = "red"
    }
 
    return isPlayerXWinner
}
