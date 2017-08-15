function getParam(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if(results){
        return results[1];
    }else{
        return undefined;
    }
}
function setup(){
    var background = getParam("background") || "black"; //background is default black
    var myimages = getParam("myimages") || "false"; //gif default does not show up
    var text = getParam('text') || "confined"; //prompt default does not appear
    var dogs = getParam('dogs') || "false";
    if(background == "black"){
        $('body').append("<h1 class='background'>It's a bit dark in here... Let's brighten things up by writing '?background=' and a color in the url. Try it out!")
    } //tells user to add ?background=color
    else if(background !== "black"){
        $('body').append("<h1 class='image'>That's better, but it's still a bit bland. If you see my code here, all my images are set to 'false'. Could you set a parameter to 'images' to not make it false anymore? To add another parameter, just type '&' instead of the '?' next to the parameter you already have.");
        $('body').append("<img class='param' src = 'picture.jpg'>")
    } //tells user to add &myimages=true
    if(background !=="black" && myimages == "true" && text == "confined"){
        $(".param").remove();
        $('.image').remove();
        $('body').append("<img class = 'god' src = 'god.gif'>")
        $('body').append("<h2 class='backtoblack'> Haha! That's not too bad, huh? Now what if you had ONLY the second parameter active? Come on, delete the first parameter and hit enter.</h2>")
    } //tells user to delete background=color&
    if(background == "black" && myimages == "true" && text == "confined"){
        $(".background").remove();
        $(".backtoblack").remove();
        $('body').append("<img class = 'god' src = 'god.gif'>")
        $("body").append("<h2 class = 'text'> Now the image remains, but the background changed back to black! Cool, huh? Now if you want to change the background color to whatever you want, feel free to. <br /> Next, lets add a random picture of cute dogs. The parameter is dogs. If its set to false, try to see how to change this parameter.</h2>");
    }
    if(myimages == "true" && text == "confined" && dogs == "true"){
        $(".text").remove();
        var theURL = "https://random.dog/woof.json";
        $.ajax({
            url: theURL,
            dataType: "json",
            type: 'GET',
            success: function(data){
                info = data;
                photo = info.url;
                $('body').append("<video><source src ='"+ photo+"' type='video/mp4'>");
            }
        })
        $('body').append("<h2>Aww. How cute! Lets now take this a step further and caption the gif of Mahdi. Lets not caption the dog pictures right now because it IS random after all. Type 'text=free' as a parameter to add the caption.</h2>")
    }
    if(myimages == 'true' && text == "free" && dogs=="true"){
        $(".background").remove();
        var freewrite = prompt("Type something to caption the gif")
        $("body").append('<img class = "god" src = "god.gif">');
        $('body').append("<p>"+freewrite+"</p>");
        $('body').append('<button id="code" type="submit" class="btn btn-success" style="width:400px;"></span> Hey. Theres a button here now. See what it does.</button>')
        $('#code').click(function(){
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        });
    }
    document.body.style.background = background;
}