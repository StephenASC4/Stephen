var xCoor1= 120;
var xCoor2= 420;
var xCoor3= 720;
var xCoor4= 1020;
var xCoor5= 1320;
var j=20;
var w = 20;
function setup(){
    createCanvas(1500,1100)
}
function draw(){
    background('#000000')
    if(xCoor1 >= 1400 || xCoor1<=0) {
        j = -j
    }
    xCoor1+=j;
    if(xCoor2 >= 1400 || xCoor2<=0) {
        w = -w
    }
    xCoor2+=w;

     fill("darkcyan");
     rect(xCoor1,60,100,35, 6,6,6,6);

    fill("gold");
     rect(xCoor2,60,100,35,6,6,6,6);

    fill("green");
     rect(xCoor3,60,100,35,6,6,6,6);

    fill("navy");
     rect(xCoor4,60,100,35,6,6,6,6);

    fill("olive");
     rect(xCoor5,60,100,35,6,6,6,6);

    fill("orange");
     textSize(82);
     text("GAME OVER", 500, 550);
    
    fill("white");
    textSize(32);
    text("YOU LOSE!!", 650, 650);

    fill("white");
     textSize(32);
     text("Score:", 1275,1050);

    fill("white");
     textSize(32);
     text("Lives:3", 1275, 150);
}