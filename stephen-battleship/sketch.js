var prompt = require('prompt-sync')();
// function setup(){
//     createCanvas(800,800)
//     background(0,0,255)
// }
// var value = 100
// var recX = 0;
// var recY = 0;
// function draw(){  
//     for(i=0;i<8;i++){
//         for (i = 0;i<8;i++){
//             fill(value)
//             rect(recX,recY,100,100)
//             recX += 100;
//         }
//     recX = 0;
//     recY+=100
//     }
// }
var gameBoard = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0],//4,6
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
]
var row = prompt("Which row would you like to attack? (1-8)");
var column = prompt("Which column would you like to attack? (1-8)");
if (gameBoard[row-1][column-1] == 0){
    console.log("Too bad! You missed!")
} else if (gameBoard[row-1][column-1] == 1){
    console.log("You sunk my battleship!")
}