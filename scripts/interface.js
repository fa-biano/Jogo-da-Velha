document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})


function handleClick(event){
    // console.log(event.target);
    
    let square = event.target;
    let position = square.id;


    if (handleMove(position)) {
        // setTimeout(()=> {
        //     alert("O Jogo Acabou. O vencedor foi o jogador " + playerTurn);
            
        // }, 10);
        
        ScoreUpdate();
    };
    updateSquares();
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}


function newGame(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
       for (i=0; i<board.length; i++){
            square.innerHTML = `<div class=''></div>`;
            board[i] = '';
        }
        playerTurn = 0;

        let msg3 = document.getElementById("info-message")
        msg3.innerHTML = `<p>Jogo iniciado...<p>`
        document.getElementById("info-message").style.color = "black"
    })

    gameOver = false;
}


function ScoreUpdate(){

    scoreCalc0();
    scoreCalcX();
    // console.log("Player 0 Winner:", isPlayer0Winner);
    // console.log("Player X Winner:", isPlayerXWinner);
    
    document.getElementById("updateX")
    updateX.innerHTML = `${isPlayerXWinner}`
    
    document.getElementById("update0")
    update0.innerHTML = `<span> ${isPlayer0Winner}<span>`

}


