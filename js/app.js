$(document).ready(function() {
    $('#main-wallpaper2').fadeOut(0);
    setInterval(function() {
        $('#main-wallpaper1').fadeToggle(2500);
        $('#main-wallpaper2').fadeToggle(2500);
    },5000);


    function timelineDotLooping() {
        var $datalist = $('#timeline-curve .timeline-dot');
        $.each($datalist, function(index){
            var self = this;
            setTimeout(function () {
                $(self).addClass('big-dot');
                $(self).prev().removeClass('big-dot');
                if(index == 0) {
                    $datalist.last().removeClass('big-dot');
                }
                // for infinite times
                if(index == $datalist.length-1) {
                    setTimeout(function () {
                        timelineDotLooping();
                    }, 3000);
                }
            }, index*3000);
        });
    }
    timelineDotLooping();

    function timelineContentLooping() {
        var $datalist = $('#timeline-main-box .timeline-content-box');
        $.each($datalist, function(index){
            var self = this;
            setTimeout(function () {
                $(self).removeClass('d-none');
                if(index > 0) {
                    $(self).prev().addClass('d-none');
                }
                if(index == 0) {
                    $datalist.last().addClass('d-none');
                }
                // for infinite times
                if(index == $datalist.length-1) {
                    setTimeout(function () {
                        timelineContentLooping();
                    }, 3000);
                }
            }, index*3000);
        });
    }
    timelineContentLooping();
    

});


    // function testimonialLooping() {
    //     var $datalist = $('#unique-journey-content .timeline-column');
    //     $.each($datalist, function(index){
    //         var self = this;
    //         setTimeout(function () {
    //             $(self).find('h6').addClass('active-journey-content');
    //             $(self).find('hr').addClass('journey-ruler');
    //             if(index > 0) {
    //                 $(self).prev().find('h6').removeClass('active-journey-content');
    //                 $(self).prev().find('hr').removeClass('journey-ruler');
    //             }
    //             if(index == $datalist.length-1) {
    //                 setTimeout(function () {
    //                     $(self).find('h6').removeClass('active-journey-content');
    //                     $(self).find('hr').removeClass('journey-ruler');
    //                     testimonialLooping();
    //                 }, 3000);
    //             }
    //         }, index*3000);
    //     });
    // }
    // testimonialLooping();