function setup() {
  createCanvas(1300, 600);
  frameRate(60)
}
var xPos1 = 260;
var xPos2 = 520;
var xPos3 = 780;
var xPos4 = 1040;
var mainCharacter;
var x = 100;
var y = 100;
var bullets = [];

function draw() {
    background('blue');
    rectMode(CENTER);
    noStroke();
    var enemy1 = true;
    if(enemy1 == true){
        fill('red');
        rect(xPos1, 50, 50, 50);
    } else if(enemy1 == false){
        rect(0,0,0,0)
    }
    var enemy2 = true;
    if(enemy2 == true){
        fill('red');
        rect(xPos2, 50, 50, 50);
    } else if(enemy2 == false){
        rect(0,0,0,0);
    }
    var enemy3 = true;
    if(enemy3 == true){
        fill('red');
        rect(xPos3, 50, 50, 50);
    }else if(enemy3 == false){
        fill(255,0,0,0)
    }
    var enemy4 = true;
    if(enemy4 == true){
        fill('red');
        rect(xPos4, 50, 50, 50);
    }else if(enemy4 ==false){
        rect(0,0,0,0)
    }
    function Shooter() {
        this.x = width / 2;
    }
    var mainCharacter = new Shooter();
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= 10
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 10
    }
    if (x > 1299) {
        x = 0
    }else if(x <= 1) {
        x = 1298
    }
    if (keyIsDown(32)) {
        bullets.push(new Bullet(x, height));
    }
    fill('green')
    rect(x, 550, 100, 100);
    fill("white");
    function Bullet(x, y) {
        this.x = x;
        this.y = y-110;
        this.r = 21;
        this.show = function() {
            fill('white')
            rect(this.x, this.y, 30, 30)
        }
        this.move = function() {
            this.y = this.y -= 20;
        }
    }
    var hitbox1 = dist(this.x,this.y,xPos1,50);
    var hitbox2 = dist(this.x,this.y,xPos2,50);
    var hitbox3 = dist(this.x,this.y,xPos3,50);
    var hitbox4 = dist(this.x,this.y,xPos4,50);
    if(hitbox1<100){
        enemy1 = false;
    }
    if(hitbox2<100){
        enemy2 = false;
    }
    if(hitbox3<100){
        enemy3 = false;
    }
    if(hitbox4<100){
        enemy4 = false;
    }
}
