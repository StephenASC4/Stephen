function superhero(realName, ability, gender, archenemy) {
    this.realName = realName,
    this.ability = ability,
    this.gender = gender,
    this.archenemy = archenemy
    this.newAbility = function(ability2){
        this.ability = ability2;
    }
};
var superman = {
    'realName' : 'Clark Kent'
};
var batman = new superhero('Bruce Wayne', 'dat money', 'male', 'Joker');
var staticShock = new superhero('Virgil', 'electricity','male','Ebon');
console.log(batman.ability);
batman.newAbility('drop kick');
console.log(batman.ability);