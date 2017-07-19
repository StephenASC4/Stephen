function setup(){
    createCanvas(1000,1000);
    background(51);
}

function mouseDragged(){
    ellipse(mouseX, mouseY, 30, 30)
    fill(random(0,255),random(0,255),random(0,255));
    return false;
}

// function draw(){
//     mouseDragged();
// }
//code by gaetan