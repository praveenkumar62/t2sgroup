$(document).ready(function() {
    $('#main-wallpaper2').fadeOut(0);
    setInterval(function() {
        $('#main-wallpaper1').fadeToggle(2500);
        $('#main-wallpaper2').fadeToggle(2500);
    },5000);

    
    function testimonialLooping() {
        var $datalist = $('#unique-journey-content .timeline-column');
        $.each($datalist, function(index){
            var self = this;
            setTimeout(function () {
                $(self).find('h6').addClass('active-journey-content');
                $(self).find('hr').addClass('journey-ruler');
                if(index > 0) {
                    $(self).prev().find('h6').removeClass('active-journey-content');
                    $(self).prev().find('hr').removeClass('journey-ruler');
                }
                if(index == $datalist.length-1) {
                    setTimeout(function () {
                        $(self).find('h6').removeClass('active-journey-content');
                        $(self).find('hr').removeClass('journey-ruler');
                        testimonialLooping();
                    }, 3000);
                }
            }, index*3000);
        });
    }
    testimonialLooping();
});