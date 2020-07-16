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

    $("#scroll-menu1").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            window.location.hash = hash;
          });
        } 
    });
    
});


// Gallery Selection
filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn-gallery");
//     for (var i = 0; i < btns.length; i++) {
//       btns[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//       });
//     }


// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn-gallery");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("btn-gallery");
//     for(var j=0;j<current.length;j++) {
      
//     current[0].className = current[0].className.replace(" active", "");
//   }
//     $(this).addClass('active');
//       // alert($(this).attr('class'));
//   });
// }

// $('#myBtnContainer .btn-gallery').each(function() {
  $('.btn-gallery').click(function() {
    $(this).addClass('selected-btn');
    $('#myBtnContainer .btn-gallery').each(function() {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    });
    $('#myBtnContainer .btn-gallery').each(function() {
      if($(this).hasClass('selected-btn')) {
        $(this).removeClass('selected-btn');
        $(this).addClass('active');
      }
    });
  })
// });

$('.gallery-pics').click(function() {
    var self = $(this);
    var imgElement = self.html();

    if($('#myModal .modal-body img').hasClass('img-responsive')) {
        $('#myModal .modal-body img').remove();
        $('#myModal .modal-body').append(imgElement);
        $('#myModal .modal-body img').attr('style','height:65vh;width:auto;margin:10px auto;display:block;object-fit:contain;');
    } else {
        $('#myModal .modal-body').append(imgElement);
        $('#myModal .modal-body img').attr('style','height:65vh;width:auto;margin:10px auto;display:block;object-fit:contain;');
    }
    
});

