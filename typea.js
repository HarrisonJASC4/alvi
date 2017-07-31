var sentence = "Hello world";

function setup(){
    createCanvas(400,400);
    background(50);
   
   fill("white");
   textSize(16);
   text("Please type in the sentence below.", 50, 50);
   text(sentence, 50, 100);
}

function keyTyped() {
    typed = typed + key;
    console.log(typed);
    if(typed == sentence);
    alert("You win!");
}
