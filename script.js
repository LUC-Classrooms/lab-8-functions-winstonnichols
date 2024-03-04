function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 192, 203);

  //this is a call to myShape()
  myShape(300, 300, 50);
  myShape(300, 200, 60);
  myShape(300, 50, 70);
  
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, w,) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(w);
  rectMode(CENTER);
  rect(0, 0, .5);
  fill(100, 100, 200);
  ellipse(0, 0, .5); // simple ellipse at the translated origin (0,0)
  fill(0,0,255);
  ellipse(-3, -2, .5);
  ellipse(3, -2, .5);
  
  pop(); // dispose of the layer
}
