function setup(){
    frameRate(60);
}
var x = 0.1;
var y = 0.1;
function draw(){
    createCanvas(500,500);
    background(0,204,0);
    quad(x,y,x+50,y,x+50,y+50,x,y+50,50);
    x+=1;
    y+=1;
    if(x<0){
        x=x;
    }
    if(x>500){
        x=-x;
    }
    if(y<0){
        y=y;
    }
    if(y>500){
        y=-y;
    }
}

