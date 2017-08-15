var rand = Math.floor(Math.random()*718)
var theURL = 'http://pokeapi.co/api/v2/pokemon/' + rand +'/';
$.ajax({
    url: theURL,
    success: function(data) {
        var pokemon = data;
        var name = pokemon.name;
        var attack = pokemon.attack;
        var img = pokemon.sprites.front_default;
        var newimg = img.replace("\\","")
        $('body').append("<h2>Hey! You caught a "+ name+"! Nice!</h2>")
        $('body').append('<img src="'+newimg +'">')
    }
})