$(document).ready(function() {
    $('#main-wallpaper2').fadeOut(0);
    setInterval(function() {
        $('#main-wallpaper1').fadeToggle(2500);
        $('#main-wallpaper2').fadeToggle(2500);
    },5000);
});