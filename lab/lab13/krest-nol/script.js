
let gamePlace = document.getElementById('gamePlace');
let turn = 0;
let box = document.getElementsByClassName('box');
let result = document.getElementById('result');
let restart = document.getElementById('restart');
let winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];
gamePlace.onclick = e => {
    if (e.target.className === 'box') {
        if (turn % 2 === 0) {
            e.target.innerHTML = 'X';
            turnWho.innerHTML = 'Ход ноликов (O)';
            e.target.className = 'box clicked';
        } else {
            e.target.innerHTML = 'O';
            turnWho.innerHTML = 'Ход крестиков (Х)';
            e.target.className = 'box clicked';
        }
        turn++;
        checkWinner();
    }
};

checkWinner = () => {
    for (let i = 0; i < winningArray.length; i++) {
    if (box[winningArray[i][0]].innerHTML === 'X' && box[winningArray[i][1]].innerHTML === 'X' && box[winningArray[i][2]].innerHTML === 'X' ) {
        result.innerHTML += 'Победили крестики!';
  
    } else if (box[winningArray[i][0]].innerHTML === 'O' && box[winningArray[i][1]].innerHTML === 'O' && box[winningArray[i][2]].innerHTML === 'O') {
        result.innerHTML += 'Победили нолики!';
       
    }
}
};



