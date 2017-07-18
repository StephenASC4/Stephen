var r, g, b;

function rand(num) {
  var randNum = Math.random() * num;
  var result = Math.floor(randNum);
  return result;
}

function setup(){
  createCanvas(1000, 1000);
  background(225);
  r = rand(225);
  g = rand(225);
  b = rand(225);
}






function draw() {
  fill(r, g, b);

}

function mouseDragged() {
  function rand(num) {
    var randNum = Math.random() * num;
    var result = Math.floor(randNum);
    return result;
  }
  fill(r, g, b);
  quad(mouseX, mouseY, rand(100), rand(100), rand(100), rand(100), rand(100), rand(100), rand(100));
  ellipse(mouseX, mouseY, rand(100), rand(100));
  rect(mouseX, mouseY, rand(100), rand(100));
  triangle(mouseX, mouseY, rand(100), rand(100), rand(100), rand(100));
  return false;
}