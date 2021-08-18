$( ".navbar .lines" ).click(function(e) {
    e.preventDefault();
    $(".claimfreebee").removeClass("claimfreebee_active");
    $(".claimresult").removeClass("claimresult_active");
    if($(this).parent().parent().hasClass("navbar_active")){
	  $(this).parent().parent().removeClass("navbar_active");
	  $(this).parent().parent().find(".rightbtn").html("GENERATE FREEBEE*");
	  $("body").removeClass("disable_scroll");
	}else{
	  $(this).parent().parent().addClass("navbar_active");
	  $(this).parent().parent().find(".rightbtn").html("GO BACK");
	  $("body").addClass("disable_scroll");
	}
});

$( ".navbar .wrapper .rightbtn" ).click(function(e) {
	// if ($(window).width() < 992) {

		e.preventDefault();
		if($(this).parent().parent().hasClass("navbar_active")){
		  $(this).parent().parent().removeClass("navbar_active");
		  $(this).parent().parent().find(".rightbtn").html("GENERATE FREEBEE*");
		  $("body").removeClass("disable_scroll");
		}else{
		  if($(".claimfreebee").hasClass("claimfreebee_active")){
			  $(".claimfreebee").removeClass("claimfreebee_active");
			  $(this).parent().parent().find(".rightbtn").html("GENERATE FREEBEE*");
			  $(".navbar .wrapper .rightbtn").removeClass("changetogreen");
			  $("body").removeClass("disable_scroll");
			  // $('html, body').animate({
			  //     scrollTop: $(".sec1").offset().top - 150
			  // }, 1000);
		  }else{
            if($(".claimresult").hasClass("claimresult_active")){
                $(".claimresult").removeClass("claimresult_active");
                $(this).parent().parent().find(".rightbtn").html("GENERATE FREEBEE*");
                $("body").removeClass("disable_scroll");
            }else{
                $(".claimfreebee").addClass("claimfreebee_active");
                // $(".navbar .wrapper .rightbtn .s2").html("HOW IT WORKS");
                $(this).parent().parent().find(".rightbtn").html("GO BACK");
                $("body").addClass("disable_scroll"); 
            }
		  }

          // $(this).parent().parent().addClass("navbar_active");
          // $(this).parent().parent().find(".rightbtn").html("GO BACK");
          // $("body").addClass("disable_scroll");
		}
	// }
    
});


$( ".navbar .wrapper ul li .onlyphone_btn" ).click(function(e) {
    e.preventDefault();
	$(".navbar").removeClass("navbar_active");
	$(".claimfreebee").addClass("claimfreebee_active");
	$(".navbar .wrapper .rightbtn").html("GO BACK");
	$(".navbar .wrapper .rightbtn").addClass("changetogreen");
	$("body").addClass("disable_scroll");
});

$( ".claimfreebee .gob a" ).click(function(e) {
    e.preventDefault();
    $(".claimfreebee").removeClass("claimfreebee_active");
    $(".navbar .wrapper .rightbtn").html("GENERATE FREEBEE*");
    $(".navbar .wrapper .rightbtn").removeClass("changetogreen");
	$("body").removeClass("disable_scroll");
});

$( ".claimfreebee .ht2 a" ).click(function(e) {
    e.preventDefault();
    $(".claimfreebee").removeClass("claimfreebee_active");
    $(".navbar .wrapper .rightbtn").html("GENERATE FREEBEE*");
    $(".navbar .wrapper .rightbtn").removeClass("changetogreen");
	$("body").removeClass("disable_scroll");
    $('html, body').animate({
        scrollTop: $(".sec1").offset().top - 150
    }, 1000);
});

$( ".cta form button, .claimfreebee form button" ).click(function(e) {
    e.preventDefault();

    $(".claimfreebee").removeClass("claimfreebee_active");
    
    $(".claimresult").addClass("claimresult_active");

    $(".navbar .wrapper .rightbtn").html("GO BACK");
    $("body").addClass("disable_scroll");

	$("body").addClass("disable_scroll");
});
$( ".claimresult .gob a" ).click(function(e) {
    e.preventDefault();
    $(".claimresult").removeClass("claimresult_active");
    $(".navbar .wrapper .rightbtn").html("GENERATE FREEBEE*");
	$("body").removeClass("disable_scroll");
});

$(".navbar .wrapper ul li .scroll").click(function(e) {
    e.preventDefault();

    $(".navbar").removeClass("navbar_active");
    $(".claimfreebee").removeClass("claimfreebee_active");
    $(".claimresult").removeClass("claimresult_active");
	$("body").removeClass("disable_scroll");
	$(".navbar .wrapper .rightbtn").html("GENERATE FREEBEE*");
	$(".navbar .wrapper .rightbtn").removeClass("changetogreen");

	var nameof = "." + $(this).attr( "name" );
    $('html, body').animate({
        scrollTop: $(nameof).offset().top - 150
    }, 1000);
});


$( ".claimresult h3 a" ).click(function(e) {
    e.preventDefault();
    $(".claimresult").removeClass("claimresult_active");
    $(".navbar .wrapper .rightbtn").html("GENERATE FREEBEE*");
    $(".navbar .wrapper .rightbtn").removeClass("changetogreen");
	$("body").removeClass("disable_scroll");
    // $('html, body').animate({
    //     scrollTop: $(".sec3").offset().top - 150
    // }, 1000);
});


$( ".tabs .tab_t .tab p" ).click(function(e) {
    e.preventDefault();
    $(".tabs .tab_t .activated").removeClass("activated");
    $(this).parent().addClass("activated");

    var openc = "." + $(this).parent().attr( "name" );
    $(".tabs .tab_contet .content_activated").removeClass("content_activated");
    $(".tabs .tab_contet").find(openc).addClass("content_activated");
});

$(window).scroll(function() {
  var topposition = $(window).scrollTop() + 110;
  if ($(".tabs").length > 0) {
    var positionofe = $(".tabs").offset().top;
      if(positionofe > topposition){
        $(".tabs .tab_t").removeClass("is-pinned");
        $(".tabs .tab_new").removeClass("is-pinned");
        $(".tabs .filter_dots").removeClass("is-pinned");
      }else{
        $(".tabs .tab_t").addClass("is-pinned");
        $(".tabs .tab_new").addClass("is-pinned");
        $(".tabs .filter_dots").addClass("is-pinned");
      }
  }
  if(topposition > 200){
    $(".navbar").addClass("nav_scroleld");
  }else{
    $(".navbar").removeClass("nav_scroleld");
  }
});

function openFullscreen(myVideo) {
  console.log("hitting")
  var elem = myVideo
  console.log(elem)
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}



$( ".h_sec3 .item .forimgs_video .playbtn" ).click(function(e) {
    e.preventDefault();
    if ($(window).width() < 992) {
        console.log("hitting")
        var elem = $(this).parent().find(".video")[0];
        console.log(elem)
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
    }
    
    var linkofvideo = $(this).parent().find("source").attr( "name" );
    $(this).parent().find("source").attr( "src", linkofvideo );
    $(this).parent().find(".video")[0].load();
    $(this).parent().find(".video").get(0).play();
});



document.onreadystatechange = function(e)
{
  if(document.readyState=="interactive")
  {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) 
    {
      set_ele(all[i]);
    }
  }
}

function check_element(ele)
{
  var all = document.getElementsByTagName("*");
  var totalele=all.length;
  var per_inc=200/all.length;

  if($(ele).on())
  {
    var prog_width=per_inc+Number(document.getElementById("progress_width").value);
    document.getElementById("progress_width").value=prog_width;
    $("#bar1").animate({width:prog_width+"%"},4,function(){
      if(document.getElementById("bar1").style.width=="100%")
      {
        $(".progress").fadeOut("slow");
      }     
    });
  }

  else  
  {
    set_ele(ele);
  }
}

function set_ele(set_element)
{
  check_element(set_element);
}









