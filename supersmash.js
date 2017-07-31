var prompt = require('prompt-sync')();
var mashArray = ["MSG", "Citi field", "Barclays", "TD"]
var firstQuestion = [10, 20]
var secondQuestion = ["kirby", "marth"]
var health = [50]


function Fq()
    {
       var answer = prompt("Who will you chose to fight ?") 
       var answert = prompt("How much will you strike ?")

       if(answer == "kirby"){
            console.log("You have chosen" + answer)

       }
       if(answer == "marth"){
           console.log("You have chosen" + answer)
       }

       if(answert == firstQuestion[0]) {
         health = health - 10;
           console.log("Kirby's health has been lowered to " + health)
       }
       else if (answert == firstQuestion[1]) {
           health = health - 20; 
             console.log("Kirby's health has been lowered to " + health)
       }
      
     
     


}


 Fq()

// var health = 50
// var attack = [];

// while(health > 9) {
//     console.log("Your opponent has" + health + " life left. First attack is 10. Second attack is 20");
//     var answer = prompt("How many times will you strike?")
//     if(answer == "10") {
//         attack = health - 10; 
//         items.push(10);
//         console.log("You attacked 10 times!");
//             } else if (answer == 20) {
//         attack = health - 20;
//         items.push(20);
//         console.log("You attacked 20!")
//     } else {
//         console.log("I dont understand how much you want to attack. Try again!" )
//     }
// }
// console.log("You fought kirby in the MSG and hit them 10 times. Too bad. kirby wins!")