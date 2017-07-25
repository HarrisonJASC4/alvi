function setup() {
    createCanvas(300, 300);
    background(225);
// stroke() sets the color of the stroke
    stroke("black"); 
    // strokeWieght() sets the width of the stroke in pixels
    strokeWeight(8);

    arc(width / 2, height / 2, 200, 200, 0, PI, CHORD);
    arc(width / 2, height / 2, 200, 200, PI, 0, CHORD);

    fill("red");
    arc(width / 2, height / 2, 200, 200, PI, 0, CHORD);
    fill("white")
    ellipse(width / 2, height / 2, 50, 50);

    fill("black");
    ellipse(width / 2, height / 2, 25, 25);
} 