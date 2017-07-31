function setup() {
    createCanvas(800, 500);
    background("gray");
   }

function draw() {
    fill("white");
    stroke("black");
    ellipse(190,380,480,80);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(150,250,50,130);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(3,396,393,100);

   var pokemon = ["Charizard"]
    stroke("black");
    strokeWeight(2);
    fill("black");
    textSize(30);
    text("What will " + pokemon + " do?",25, 450);

   fill("white");
    stroke("black");
    ellipse(600,200,370,80);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(560,80,50,130);
    

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(403,396,393,100);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(425,320,350,70);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(25,25,350,70);

   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("FIGHT",450,435);

   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("POKeMON",450, 480);

   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("BAG",660, 435);

   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("RUN",660, 480);

    strokeWeight(2);
fill("black");
textSize(20);
text("Charizard                        lvl 50", 450,350);

strokeWeight(2);
fill("black");
textSize(20);
text("Blastoise                        lvl 50", 50,50);



}


    
    
// }

// mouseClicked = function() {
//    console.log(mouseX, mouseY)

// };


// var pokemons = {


// userpokemon:
// "Charizard",

// opponentpokemon:
// "Blastoise",

// userHp: 100,
//     userlevel: 50,
// opponentHp: 100,
//     opponentlevel : 50,
   
//     BattleText: "Choose an option for Charizard",

// Battleoption:["Fight", "Item", "Run"],



// // userDamage: [15,40,50,25],

// // opponentAttacks:
// // ["Tackle", "Water Gun", "Hydro Pump", "Water Pulse"],
// //     opponentDamage: [15,40,50,25],
// // fightOptions: ["Flamethrower", "Inferno", "Heat Wave", "Flare Blitz"],
// //     endOptions: ["Yes", "No"],
// // }

// // var prompt = require('prompt-sync')();
// // var flamethrower = [15];
// // var Inferno = [40];
// // var secondQuestion = ["Charizard"]
// // var health = [100]


// // function Fq()
// //     {
// //        var answer = prompt("Who will you chose to fight ?") 
// //        var answert = prompt("Which attack will you choose ?")

// //        if(answer == "Charizard"){
// //             console.log("You have chosen" + answer)

// //        }

// //        if(answert == flamethrower[0]) {
// //          health = health - 15;
// //            console.log("Blastoise health has been lowered to " + health)
// //        }
// //        else if (answert == Inferno[0]) {
// //            health = health - 40; 
// //              console.log("Blastoise health has been lowered to " + health)
// //        }
// //         if(answert == [0]) {
// //          health = health - 15;
// //            console.log("Blastoise health has been lowered to " + health)
// //        }
// //        else if (answert == [0]) {
// //            health = health - 40; 
// //              console.log("Blastoise health has been lowered to " + health)
// //        }
// //     }
