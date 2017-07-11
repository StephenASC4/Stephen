var myPokemonRoster = ["magikarp","ditto","dunsparce","hoppip","mimikyu"];
var firstToFight = "magikarp";
var secondToFight = "ditto";
//myPokemonRoster.pop();
//myPokemonRoster.push("jigglypuff");
//myPokemonRoster.push("pikachu");
var rosterSize = myPokemonRoster.length;
var lastToFight = ("pikachu");
//for (var listofPokemon=0;listofPokemon<5;listofPokemon++){
//    console.log(myPokemonRoster[listofPokemon]);
//}
//for (var listofPokemonbutinReverse=4; listofPokemonbutinReverse>-1;listofPokemonbutinReverse-=1){
//    console.log(myPokemonRoster[listofPokemonbutinReverse]);
//}
//for (var listofPokemonbutonlyintheNumberoftheArray=0;listofPokemonbutonlyintheNumberoftheArray<myPokemonRoster.length;listofPokemonbutonlyintheNumberoftheArray++){
//    console.log(myPokemonRoster[listofPokemonbutonlyintheNumberoftheArray])
//}
if (rosterSize>4){
  for (var playandhavefun=0;playandhavefun<5;playandhavefun++)
  console.log(myPokemonRoster[playandhavefun])
}
if (rosterSize<5){
  console.log("You Can't Play! Not Enough Pokemon")
}
//lines 4-6 is a bonus to get rid of mimikyu and to add jigglypuff and pikachu, 9-11 is to list the pokemon, 12-14 is for reverse order, 15-17 is for ordering without any undefined, and 18-24 is for seeing if they have enough pokemon to play