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
var y = 160;
var enemy1 = true;
var enemy2 = true;
var enemy3 = true;
var enemy4 = true;
var bullets = [];
var boomboom;
function draw() {
    background('blue');
    rectMode(CENTER)
    noStroke();
    if(enemy1 == true){
        fill('red');
        var enemies1 = ellipse(xPos1, 50, 50, 50);
    } else if(enemy1 == false){
        rect(0,0,0,0)
    }
    if(enemy2 == true){
        fill('red');
        var enemies2 = ellipse(xPos2, 50, 50, 50);
    } else if(enemy2 == false){
        rect(0,0,0,0);
    }
    if(enemy3 == true){
        fill('red');
        var enemies3 = ellipse(xPos3, 50, 50, 50);
    }else if(enemy3 == false){
        fill(255,0,0,0)
    }
    if(enemy4 == true){
        fill('red');
        var enemies4 = ellipse(xPos4, 50, 50, 50);
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
        this.show = function() {
            fill('white')
            var boomboom = ellipse(this.x, this.y, 20, 30)
        }
        this.move = function() {
            this.y = this.y -= 20;
        }
        
    }
    var boomboom = ellipse(this.x,y-110,20,30)
    var hitbox1 = dist(260,50,x,y-110)
    var hitbox2 = dist(520,50,x,y-110)
    var hitbox3 = dist(780,50,x,y-110)
    var hitbox4 = dist(1040,50,x,y-110)
    if(hitbox1<50){
        enemy1 = false;
    }
    if(hitbox2<50){ 
        enemy2 = false;
    }
    if(hitbox3<50){
        enemy3 = false;
    }
    if(hitbox4<50){
        enemy4 = false;
    }    
}
    
