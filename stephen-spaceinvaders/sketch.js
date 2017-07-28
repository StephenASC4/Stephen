// function setup() {
//   createCanvas(1300, 600);
//   frameRate(60)
// }
// var xPos1 = 260;
// var xPos2 = 520;
// var xPos3 = 780;
// var xPos4 = 1040;
// var mainCharacter;
// var x = 100;
// var y = 160;
// var enemy1 = true;
// var enemy2 = true;
// var enemy3 = true;
// var enemy4 = true;
// var bullets = [];
// var boomboom;
// function draw() {
//     background('blue');
//     rectMode(CENTER)
//     noStroke();
//     if(enemy1 == true){
//         fill('red');
//         var enemies1 = ellipse(xPos1, 50, 50, 50);
//     } else if(enemy1 == false){
//         rect(0,0,0,0)
//     }
//     if(enemy2 == true){
//         fill('red');
//         var enemies2 = ellipse(xPos2, 50, 50, 50);
//     } else if(enemy2 == false){
//         rect(0,0,0,0);
//     }
//     if(enemy3 == true){
//         fill('red');
//         var enemies3 = ellipse(xPos3, 50, 50, 50);
//     }else if(enemy3 == false){
//         fill(255,0,0,0)
//     }
//     if(enemy4 == true){
//         fill('red');
//         var enemies4 = ellipse(xPos4, 50, 50, 50);
//     }else if(enemy4 ==false){
//         rect(0,0,0,0)
//     }
//     function Shooter() {
//         this.x = width / 2;
//     }
//     var mainCharacter = new Shooter();
//     for (var i = 0; i < bullets.length; i++) {
//         bullets[i].show();
//         bullets[i].move();
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         x -= 10
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         x += 10
//     }
//     if (x > 1299) {
//         x = 0
//     }else if(x <= 1) {
//         x = 1298
//     }
//     if (keyIsDown(32)) {
//         bullets.push(new Bullet(x, height));
//     }
//     fill('green')
//     rect(x, 550, 100, 100);
//     fill("white");
//     function Bullet(x, y) {
//         this.x = x;
//         this.y = y-110;
//         this.show = function() {
//             fill('white')
//             var boomboom = ellipse(this.x, this.y, 20, 30)
//         }
//         this.move = function() {
//             this.y = this.y -= 20;
//         }
        
//     }
//     var boomboom = ellipse(this.x,y-110,20,30)
//     var hitbox1 = dist(260,50,x,y-110)
//     var hitbox2 = dist(520,50,x,y-110)
//     var hitbox3 = dist(780,50,x,y-110)
//     var hitbox4 = dist(1040,50,x,y-110)
//     if(hitbox1<50){
//         enemy1 = false;
//     }
//     if(hitbox2<50){ 
//         enemy2 = false;
//     }
//     if(hitbox3<50){
//         enemy3 = false;
//     }
//     if(hitbox4<50){
//         enemy4 = false;
//     }    
// }
var minAliens = 3;
var numAliens = minAliens;
var sel;
var replayButton;
var buttonL0;
var buttonL1;
var buttonL2;
var kill = 0;
var score;

var lvl = 0;  // 0, 1, 2, 3

var ship;
var aliens = [];
var projectiles = [];

function chooseLvl(num) {
    lvl = num;
}

function Ship() {
    this.x = 250;
    this.y = 450;
    this.destroyed = false;

    this.make = function() {
        if(keyIsDown(LEFT_ARROW)){            // Move left
            if (this.x > 0) {
              this.x -=5;
            }
        } else if (keyIsDown(RIGHT_ARROW)){  // Move right
            if (this.x < 500 - 50) {
              this.x += 5;
            }
         
        }
        fill("white");
        rect(this.x, this.y, 50, 100);
    }
}

function Alien(x,y){
    this.x = random(500);
    this.y = random(200);
    this.r = 15;
    this.left = true;
    this.count = 0;
  
    this.move = function() {
       if (lvl == 2) {
          this.y += 0.5;
           if(this.left) {
             if (this.x > 0) {
                this.x -= 2;
             }
             this.count += 1
             
             if(this.count == 30){  // see movement back and forth
        
               this.left = false;
               this.count = 0;
             }
             
           } else if (!this.left){
             if (this.x < (500 - 30)) {
               this.x += 2;
             }
             this.count += 1
             if(this.count == 30){
               this.left = true;
               this.count = 0;
             }
           }
    }
    }

    this.make = function() {
        fill("red");
        if(this.y < (500 - (2*this.r))){
          ellipse(this.x, this.y, 30);
        } else {
          ship.destroyed = true;
        }
        
      this.move();
        
      }
}

function Projectile(x,y) {
    this.x = x; 
    this.y = y; 
    this.r = 5;
    this.vector;
	
//   	this.closestAlien = function () {
//         var alien;
//         var closeDist = Number.MAX_SAFE_INTEGER;
        
//         for(var i = 0; i < aliens.length; i++) {    
//             if (dist(this.x, this.y, aliens[i].x, aliens[i].y) < closeDist) {
//                 closeDist = dist(this.x, this.y, aliens[i].x, aliens[i].y);
//                 alien = aliens[i];
//             }
//         } 

//         return alien;      
// 	}
    
//     this.smartmove = function() {
//       var alien = this.closestAlien();

//         if(alien && (lvl == 0 || this.vector == null)) {
//                 this.vector = createVector(alien.x - this.x, alien.y - this.y).normalize();
//         }
      
//          if (lvl <= 2) {
//            this.x += this.vector.x;
//            this.y += this.vector.y;
//          } 
//     }
    
    this.move = function() {
           this.y -= 10;    
    }

    this.make = function() {
        fill("yellow");
        if(this.x >= 0 && this.y >= 0){
             for(var i = 0; i < aliens.length; i++) {
               
                if (dist(this.x, this.y, aliens[i].x, aliens[i].y) < this.r + aliens[i].r) {    // collision
                    projectiles.splice(projectiles.indexOf(this), 1);
                    
                    if(aliens[i].y > width/2) {
                      kill += 10;
                    } else {
                      kill += 5;
                    }
                  
                   aliens.splice(i, 1);
                    
                }

            }
            ellipse(this.x, this.y, 10);
            this.move();
        }
    }
}

function setup() {
    createCanvas(500,500);
    background('#0a0538');
    
    
  
    replayButton = createButton('Replay');
    replayButton.position(width + 20, 10)
    replayButton.mousePressed(replay);
  
    buttonL0 = createButton("Level 0");
    buttonL0.position(width + 20, replayButton.height + 30);
    buttonL0.mousePressed(choose0);
    
    buttonL1 = createButton("Level 1");
    buttonL1.position(width + 20, replayButton.height + 60);
    buttonL1.mousePressed(choose1);
  
    buttonL2 = createButton("Level 2")
    buttonL2.position(width + 20, replayButton.height + 90);
    buttonL2.mousePressed(choose2);
  
  score = createP("Score: " + kill);  
    score.position(width + 20, buttonL2.y + 20);

    ship = new Ship();
    

    for (var i = 0; i < numAliens; i++) {
        var newAlien = new Alien();
        aliens.push(newAlien);
    }
  
  function replay(){
   ship = new Ship();
    
    aliens = []
    projectiles = [];
    for (var i = 0; i < numAliens; i++) {
        var newAlien = new Alien(random(500), random(200));
        aliens.push(newAlien);
    }
    kill = 0;
    redraw();
  }
  
  function choose0() {
    lvl = 0;
    numAliens = minAliens;
    replay();
  }
  
  function choose1() {
    lvl = 1;
    numAliens = minAliens * 2;
    replay()
  }
  
  function choose2() {
    lvl = 2;
    numAliens = minAliens * 3;
    replay();
  }
}

function draw() {
    background('#0a0538')
    noStroke();
    
    score.remove();
    score = createP("Score: " + kill);  
    score.position(width + 20, buttonL2.y + 20);
    
  
    // alien ships
    for(var i = 0; i < aliens.length; i++) {
        aliens[i].make();   
    }

    // spaceship
    if (!ship.destroyed) {
        ship.make();
    } else {
      textSize(24);
      textAlign(CENTER);
      text("GAME OVER", width/2, height/2);
    }

    // bullets
    for(var i = 0; i < projectiles.length; i++) {
        projectiles[i].make();
    }

}

function keyPressed() {     // send bullets - using key pressed so only one sent at a time
    if(keyCode == 32) {    // spacebar
        fill("yellow");
        var newProjectile = new Projectile(ship.x + 25, ship.y);
        projectiles.push(newProjectile);
    }
}
