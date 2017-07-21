var pokeView = prompt("Which do you want to use to battle?? zoroark, deoxys or mawile? Type your choice exactly as shown.");
function setup() {
    createCanvas(1360,600);
    frameRate(1)
    var button = createButton('Dark Pulse')
    button.position(95,500);
    button.mousePressed(damagedealing);
};
if (pokeView = "zoroark"){
    var username = prompt("What is your name?") 
}
var opponentattack = 40
function draw(){
    background("#6495ED");
    fill('black')
    line(0,475,1360,475)
    fill('black')
    line(400,475,400,600)
    fill("blue")
    ellipse(1200,100,100,100)
    fill(41,49,65)
    ellipse(100,400,100,100)
    textSize(20)
    fill(0)
    text(username,50,50) 
    fill(0)
    textSize(20);
    text(pokeView + ": 60/60",200,400);
};
var pokeHp = 0;
if(pokeView == "zoroark"){
    pokeHp = 60;
}else if(pokeView == "deoxys"){
    pokeHp = 50;
}else if(pokeView == "mawile"){
    pokeHp = 50;
}
var zoroark = [
  ["Name: Zoroark"],
  ["Type: Dark"],
  ["Hp: 60"],
  ["Def: 60"],
  ["Atk: 105"],
  ["Legendary: Nope"],
];

var deoxys = [
  ["Name: Deoxys"],
  ["Type: Psychic"],
  ["Hp: 50"],
  ["Def: 50"],
  ["Atk: 150"],
  ["Legendary: Yup"],
];

var mawile = [
  ["Name: Mawile"],
  ["Type: Fairy, Steel"],
  ["Hp: 50"],
  ["Def: 125"],
  ["Atk: 105"],
  ["Legendary: Nope"],
];
function mousePressed(){
    damagedealing;
}
function damagedealing(){
        fill(0);
        textSize(20);
        text(pokeView + " attacked the enemy for 70 damage!",50,300)
        if (pokeHp>opponentattack){
            fill(0);
            textSize(20);   
            text(pokeView + " has recieved 40 damage and now has " + (pokeHp - opponentattack) + " health left.",600,300);
            pokeHp = pokeHp - opponentattack;
        }else if(pokeHp<opponentattack){
            fill(0);
            textSize(20);
            text(pokeView + "has recieved fatal damage and has now fainted.")
        }
    fill(0)
    textSize(20)
    text( pokeView + ": " + pokeHp +"/60",200,400)
}

