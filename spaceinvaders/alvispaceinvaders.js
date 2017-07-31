var y = 300;
var ball;

function setup() {
    createCanvas(300, 300)
    background(135);
    ball = new ball(width / 2, height)
    ;
}

function draw(){
    background(135);
    if (keyIsDown(LEFT_ARROW))
    x-=3;

  if (keyIsDown(RIGHT_ARROW))
    x+=3;

  if (keyIsDown(UP_ARROW))
    y-=3;

  if (keyIsDown(DOWN_ARROW))
    y+=3;

  clear();
  fill(255, 0, 0);
  rect(x, y, 30, 20);
    
    for (var i = 0; i < balls.length;
   i++) {
    ball.show();
    ball.move(-3);
}}

function mousePressed(){
    balls.push(new ball(mouseX, mouseY))
}

