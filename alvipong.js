function setup() {
    createCanvas(500, 300);


}
var x = 50;
var y = 50;
var dx = 1;
var dy = 1;
function draw() {
    background(100);
    ellipse(x, y, 100, 100);


    if (x < 50 || x > 450)
        dx = -dx
    if (y < 50 || y > 250) {
        dy = -dy;
    }



    x = x + dx;
    y = y + dy;

}
