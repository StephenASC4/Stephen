var prompt = require('prompt-sync')();
// var hasDog = false;
// while (hasDog==false){
//     var response = prompt('Do you have a dog? ')
//     if (response == 'yes'){
//         hasDog = true;
//         console.log('k bye')
//     }
// } 
var balance = 1000;
while (balance > 0){
    var spent = prompt("How much do you want to spend?");
    while (spent>balance){
        spent = prompt("BOI YOU ONLY HAVE " + balance + ". CHILL AND SPEND SOME LESS.")
    }
    balance = balance - spent;
    console.log("Your balance is " +balance)
}