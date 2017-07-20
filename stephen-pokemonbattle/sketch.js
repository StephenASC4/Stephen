var pokeView = prompt("Which do you want to use to battle?? zoroark, deoxys or mawile? Type your choice exactly as shown.");

function setup() {
    createCanvas(1360,600);
    frameRate(60)
        background(0,255,0);

};
if (pokeView = "zoroark"){


    var username = prompt("What is your name?")
}
var opponentattack = 40
function draw(){
    fill('black')
    line(0,475,1360,475)
    fill("blue")
    ellipse(1200,100,100,100)
    fill(41,49,65)
    ellipse(100,400,100,100)
    textSize(20)
    fill(0)
    text(username,50,50)
    fill(255);
    rect(95,500,120,50)
    textSize(20)
    fill(0)
    text("Dark Pulse",100,530)
    
    
};
var pokeHp = 0;

function pokeBattle(){
    if(pokeView == "zoroark"){
      pokeHp = 60;
    }
    else if(pokeView == "deoxys"){
      pokeHp = 50;
    }
    else if(pokeView == "mawile"){
      pokeHp = 50;
    }
}
console.log(pokeHp);
function mousePressed(){
    var thunderboltbutton1 = dist(mouseX, mouseY, 95,500);
    var thunderboltbutton2 = dist(mouseX,mouseY,210,550); 
    if (thunderboltbutton1< 100 && thunderboltbutton2< 100){
        fill(0);
        textSize(20);
        text(pokeView + " attacked the enemy for 70 damage!",50,300)
    }
    if (opponentattack<pokeHp){
        fill(0);
        textSize(20);
        text(pokeView + " has recieved 40 damage and now has " + (pokeHp - opponentattack) + " health left.",600,300);
        pokeHp = pokeHp - opponentattack  
    }else if(opponentattack>pokeHp){
        fill(0);
        textSize(20);
        text(pokeView + "has recieved fatal damage and has now fainted.")
    }
    fill(0)
    textSize(20)
    text( pokeView + ": " + pokeHp +"/60",200,400)
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
