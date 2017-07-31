
var hp = 100;
var gold = 0;
var numberDefeated = 0;

UpdateStats();
function setup() {
    $("body").append("<h1> Welcome to Ogre Fighter v.1.0</h1>");

   $("body").append("<p> Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat and ogre.....</p>");

   $("body").append("<h3>STATS</h3><p id= 'stats'></p>")


   $("body").append("<button onClick = 'attack()'> ATTACK THE OGRE!</button>");


   $("body").append("<div id='ogres'></div>");
}

function UpdateStats() {
$("#stats").text("HP:"+ hp +"| Gold:" + gold + " | Ogres Slain: " + numberDefeated);
}
function attack() {
    if (hp > 0) { 
        // Player is still alive
    if (Math.random() * 100 > gold) {
        gold += 10;
        //  gold = gold + 10 
        numberDefeated++;
        $("#ogres").prepend("<p>You won! +10 gold.</p>");
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

function spawnOgre() {
    $("#ogres").prepend("<img src='https://thumb1.shutterstock.com/display_pic_with_logo/100254/180520877/stock-vector-cartoon-ogre-with-a-big-axe-isolated-180520877.jpg'>");
}


$(document).ready(setup); 



// Add the game title
// Add game info

// Add the stats

// Add an ogre image
// When the player clicks the button
//          If the player defeates ogre
//      Add paragrah saying "ypu win"
//          +Gold to player
//          +Num of ogres defeaeted 
//  Else
//          Add paragraph saying "you lost"
//          -Gold from player
//      -HP
//              Update stats
//       add another ogre image
// else
//          Add paragraph saying "game over"
