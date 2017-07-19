function setup(){
    frameRate(60);
}
var xPos = 100
var yPos = 100
var x = 100
var y = 100
function draw(){
    createCanvas(1360,896)
    background(0,0,0)
    var c = (255,255,255)
    fill(c)
    if(xPos<=50 || xPos >= 1310) x = -x;
    if(yPos <= 50 || yPos >= 846) y = -y;
    xPos += x;
    yPos += y;
    ellipse(xPos, yPos, 100,100);
};
//code by justin