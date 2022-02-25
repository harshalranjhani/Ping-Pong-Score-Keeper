const p1 = document.querySelector('#one')
const p2 = document.querySelector('#two')
const p1b = document.querySelector('#oneb')
const p2b = document.querySelector('#twob')
const reset = document.querySelector('#reset')
const playToSelect = document.querySelector('#playto')
let isGameOver = false;
let maxScore = 3;
let p1Score = 0;
let p2Score = 0;
const winner = document.createElement('b');


p1b.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === maxScore) {
            p1.style.color = "green";
            p2.style.color = "red";
            winner.innerText = "Player 1 Wins!";
            document.body.append(winner);
            isGameOver = true;
        }
        p1.innerText = `Player 1: ${p1Score}`
    }
})

p2b.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === maxScore) {
            p2.style.color = "green";
            p1.style.color = "red";
            winner.innerText = "Player 2 Wins!";
            document.body.append(winner);
            isGameOver = true;
        }
        p2.innerText = `Player 2: ${p2Score}`
    }
})

// console.dir(playToSelect)

playToSelect.addEventListener('change',function(){
    maxScore = parseInt(this.value);
    resetButton();
})

reset.addEventListener('click',resetButton)

function resetButton(){
    p1Score=0;
    p2Score=0;
    isGameOver=false;
    p1.innerText = `Player 1: ${p1Score}`
    p2.innerText = `Player 2: ${p2Score}`
    p1.style.color = null;
    p2.style.color = null;
    winner.remove();
}


