function printRoster(Name, Type, HP, Def, Atk, Legend){
    this.Name = Name,
    this.Type = Type,
    this.HP = HP,
    this.Def = Def,
    this.Atk = Atk,
    this.Legend = Legend
    this.hurtpokemon = function(pokemonAttacked){
        this.HP -=10
    };
    this.userinputhurts = function(owiewhyyoudodis){
        this.HP - loseHP
    };
}
var ditto = new printRoster('Ditto','Normal',45,45,45,false);
var arceus = new printRoster('Arceus','Normal',120,120,120,true);
var victini = new printRoster('Victini','Fire',100,100,100,true);
var castform = new printRoster('Castform','Normal',70,70,70,false);
var jirachi = new printRoster('Jirachi','Psychic',100,100,100,true);
var mew = new printRoster('Mew','Normal',100,100,100,true);
var mypokemonteam = [ditto, arceus, victini, castform, jirachi, mew]
var prompt = require('prompt-sync')();
var promptSync = require('prompt-sync')();
var loseHP = prompt("Your pokemon is confused! How much damage did a pokemon take?");
var damagereciever = mypokemonteam[Math.floor(Math.random()*mypokemonteam.length)];
var ouchies = JSON.stringify(damagereciever.HP -loseHP);
if (ouchies < 1){
  console.log(JSON.stringify(damagereciever.Name)+ " has fainted! What a shame...");
}else{
console.log(JSON.stringify(damagereciever.Name)+" has recieved " +loseHP+    " damage! "+ JSON.stringify(damagereciever.Name)+" only has " +ouchies+ " health points left!");
}
// console.log(ditto.HP);
// ditto.hurtpokemon();
// console.log(ditto.HP);