//this game should load a new ogre image everytime a button is pressed as well as update stats which include: HP, Gold, and Ogres Slain.
//when lose, HP-1,Gold-1,Ogres Slain no change.
//when win, HP no change, Gold+10, Ogres Slain+1.
var HP = 100;
var gold = 0;
var slain=0;
function updateStats(){
    $('#stats').text("HP " +HP +" Gold: "+gold+" Ogres Slain: "+slain)
}
function attack(){
    if(HP>1){
        if(Math.random()*100>gold){
            gold+=10;
            slain++;
            $('#ogres').prepend('<p style="color: green">You Won! +10 gold!</p>');
        } else {
            gold--;
            HP--;
            $('#ogres').prepend('<p style="color: red">You Lost! -1 gold</p>')
        }
    }else{
        $('#ogres').prepend('<h1>GAME OVER!</h1>')
    }
    updateStats();
}
function setup(){
    //title
    $('body').append('<h1>Welcome to Ogre Fighter v.1.0</h1>');
    //in-game stats
    $('body').append('<div><h3>STATS</h3><p id="stats"></p></div>');
    //button
    $('body').append('<button onclick="attack()">Attack the Ogre!</button>');
    //ogres
    $('body').append('<div id="ogres"></div>');
}
$(document).ready(setup);