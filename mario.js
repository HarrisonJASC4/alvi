var col = "black";

function setup() {
    createCanvas( 300, 300);
    background (245);
    

   fill("green");
    rect(0, 0, 500, 30);
    fill("blue");
    rect(0, 60, 500, 30);   
}

function mouseDragged() {
    
   fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(50),random(50));
    fill (random(800), random (800), random(800));
    rect(mouseX, mouseY, random(50), random(50));


}

function mousePressed() {
    if (mouseY < 31) {
        col = "green"
    } else if (mouseY > 31 && mouseY < 61 ) {
        col = "blue";
    } else if (mouseY > 60 && mouseY < 91) {
        col = "yellow"
    }
 }