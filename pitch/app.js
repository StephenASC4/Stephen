$.ajax({
    success: function(data){
        $('body').prepend("<img src='god.gif'>")
    }
})
function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    $(".userName").text(profile.getName());
}
function onSignOut(googleUser){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        $(".userName").text("someone");    
    })
}