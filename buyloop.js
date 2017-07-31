 var prompt = require('prompt-sync')();

// Player starts with 1000
// They're buying items at a store before they go on an adventure
// They have to spend as much money as possible (i.e. spend all their money)

// PSEUDOCODE
// assign the player's money to 1000
// create and array to store the items that the player bought 
// until the player runs out of money: 
// ask them what they want to buy
// subtract tht price from the money they have
// put item they bought in array

var money = 1000; 
var items = [];

while(money > 99) {
    console.log("You have $" + money + " left. A tent is 100. Used Yeezys are 500.");
    var answer = prompt("Whch item do you want to buy?")
    if(answer == "tent") {
        money = money - 100; 
        items.push("tent");
        console.log("You bought a tent!");
    } else if (answer == "Used Yeezys") {
        money = money - 500;
        items.push("Used Yeezys");
        console.log("You bought used Yeezys!")
    } else {
        console.log("I dont understand your answer. Try again!" )
    }
}