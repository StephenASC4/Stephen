theURL = "https://randomuser.me/api/"; //random user api
$.ajax({
    url: theURL,
    success: function(data){
        information = data;
        nationcode = information.results[0].nat; //2-letter code for country
        name = information.results[0].name.first; //first name
        last = information.results[0].name.last; //last name
        gender = information.results[0].gender; //gender
        picture = information.results[0].picture.large; //image of person
        newURL = 'https://restcountries.eu/rest/v2/alpha/'+nationcode; //sets new api url
        $('head').append("<title>"+nationcode+"</title>") //puts the 2-letter code in the title
        $('body').append("<p id='hey'>Name: "+name+" "+last+"</p>") //puts the name on the window
        $("body").append("<p id = 'howis'>Gender: "+gender+"</p>") //puts the gender on the window
        $.ajax({
            url: newURL,
            success: function(data){
                knowledge = data;
                countryname = knowledge.name; //full country name
                $('body').append("<p id='it'>Country of Origin: "+countryname+"</p>"); //puts the country on the window
                $('body').append("<img src = '"+picture+"'>") //puts the picture on the window (done last to put it at the bottom)
            }
        })
    }
})