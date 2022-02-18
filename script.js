// let music = new Audio('background-music.mp3');
// console.log(music);
// let music=document.getElementById("soundtrack");
// let mu=music.play();
// console.log(mu);
// let audioturn = new Audio("");
// let gameover = new Audio("");
let turn = "X";

//function to turn the change of the player
const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

//game logic

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]
function checkwinner() {
    wins.forEach(function (comb) {
        let w=document.getElementById("winner")
        let check = comb.every(idk => cells[idk].innerText.trim() === turn)
        if (check) {
            let img=document.getElementsByClassName("img")
            img[0].classList.remove("img");
            w.innerText=turn+" "+ "You won the Match!";
           
        }
    }
    )

}
let boxes = document.getElementsByClassName("boxtext");
let cells = Array.from(boxes)
cells.forEach(function (cell) {
    cell.addEventListener('click', () => {
        let music=document.getElementById("soundtrack");
let mu=music.play();
console.log(mu);
        if (cell.innerText == "") {
            cell.innerText = turn;
            checkwinner();
            turn = changeturn();
            var turnt = document.getElementsByClassName("turn");
            turnt[0].innerHTML = "Now it's turn for " + turn;
         
            // audioturn.play();
            // checkwin();
        }
    });
});
// logic for reset the game
let reset = document.getElementsByClassName("reset");
console.log(reset[0]);
reset[0].addEventListener('click', () => {
    var box = document.getElementsByClassName("boxtext");
    Array.from(box).forEach(element => {
        element.innerText = '';
    });
    var turnt = document.getElementsByClassName("turn");
    turnt[0].innerHTML = "";
    let w=document.getElementById("winner")
    w.innerText="";
    let music=document.getElementById("soundtrack");
    let mu=music.pause();
    console.log(mu)
})


       