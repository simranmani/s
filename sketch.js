function setup() {
  //create a surface to draw on
  createCanvas(700,400);

// R G &B values
  background(142, 164, 250);
  //take a big brush
  strokeWeight(10);
  // dip in purple color
  stroke("pink");
  frameRate(10);
}
function draw(){
  //declare variables
  let posY =mouseX
  let posX= mouseY
  //place a dot on a screen
  point(posX,posY);
}