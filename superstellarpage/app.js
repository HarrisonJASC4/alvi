var hp = 100;
var gold = 0;
var numberDefeated = 0;

UpdateStats();
function setup() {
    $("body").append("<h1> WELCOME TO SUPERSTELLAR!!!</h1>");

   $("body").append("<p> Follow our social media @SuperStellar on Facebook and Instagram</p>");

   $("body").append("<h3>Below is a gif of the game that we have created!</h3><p id= 'stats'></p>")


   $("body").append("<button onClick = 'attack()'> CLICK THE BUTTON TO VIEW THE GIFS!</button>");


   $("body").append("<div id='ogres'></div>");
}

function UpdateStats() {
$("#stats").text();
}
function attack() {
    if (hp > 0) { 
        // Player is still alive
    if (Math.random() * 100 > gold) {
        gold += 10;
        //  gold = gold + 10 
        numberDefeated++;
        $("#ogres").prepend("<p>.</p>");
    } else {
        gold--; 
        // gold = gold -1
        hp--;
        $("#orges").prepend("<p>You lost! -1 gold.</p>")
    }
UpdateStats();
spawnOgre();
} 
 }
var index = 0;
function spawnOgre() {if (index == 0){
    $("#ogres").prepend("<img src='https://media.giphy.com/media/1wh06XT53tPGw/giphy.gif'>");
    index++;
} else {
$("#ogres").prepend("<img src='https://media.giphy.com/media/FMapondVtL2Fi/giphy.gif'>");
}
    
}


$(document).ready(setup); 
