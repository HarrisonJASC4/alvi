// var PokemonObjects = {
//     atk: 80,
//     def: 80,
//     hp: 100,
//     legend: false,
//     name: "charizard",
//     type: "Fire"

// } 

function printRoster(atk, def, hp, legend, name, type) {
    this.atk = atk;
    this.def = def;
    this.hp = hp; 
    this.legend = legend;
    this.name = name;
    this.type = type;
for(i = 0; i < 1; i++){
    console.log(atk);}
  if (i == 1 ){
      console.log(def);}
      if (i > 0){
        console.log(hp);
      }
      if (i> 0){
          console.log(false);
      }
      if( i > 0){
          console.log(name);
      }
      if(i > 0){
          console.log(type);

      }
      

}

 printRoster();
    


var charizard = new printRoster("80", "80", "100", "no", "charizard", "fire")
 var squirtle = new printRoster("70", "70", "90", "no", "squirtle", "water")
 var charmander = new printRoster("60", "60", "70", "no", "charmander")

// function pokemonAttacked(atk, def, hp){ 
//      charizard[2] = 90;
//     this.atk = atk;
//     this.def = def;
//      this.hp = hp;
//      this.talk = function() {
//         console.log(hp);
// }
    
    

// }


// pokemonAttacked();