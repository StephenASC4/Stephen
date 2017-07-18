function setup(){
    ellipse(50,80,200,80);
    createCanvas(1000,1000);
    background('#00CC00');
    stroke("black");
    strokeWeight(5);
    fill("red");
    arc(width/2, height/2, 400,400, 0, PI, CHORD);
    fill("white");
    arc(width/2, height/2, 400,400, PI, 0, CHORD);
    fill("white");
    ellipse(width/2, height/2, 100);
    fill("black");
    ellipse(width/2, height/2, 50);
}