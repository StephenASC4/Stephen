console.log("It was just fine - we lived in peace - looked to a happy ending. The days were bright - they shined like gold, every step ascending. Our dreams came true, our path was clear - the moon watched safely from above. But every smile is not the same and every heart's not filled with... love for mankind. Look around, it's getting very hard to find. Not every open wound is simply healed by time, but revenge is always sweet and chaos is the prize. Feel it everywhere and you see it growing. Enemies arise and the hate is flowing, shattering the moon and bloodying the sky. The machines of war will fuel both sides and the greed will only grow more lies. Farewell to days of peace cuz now it's time to die!");
function rand(numbersandsuch) {
    var randomDec = Math.random() * numbersandsuch;
    var randInt = Math.floor(randomDec);
    console.log(randInt);
    return randInt;
} //generates a random number(s) between 0 and the ones below
rand(100);
rand(1000);
rand(45);
rand(900);