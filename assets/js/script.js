/*	gallery */
$(document).ready(function(){
    console.log('coming here');
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggler").click();
        }
    });
});

function reduce(){
    var ele = document.getElementById('header-btn');
    if(screen.width <=568){
        ele.className="btn btn-primary btn-lg text-uppercase js-scroll-trigger";
        console.log('reduced');
    }
}

$(window).on('resize', function (){
    if($(window).width() <= 568 || screen.width <=568) {
        var ele = document.getElementById('slider-builder slider-desktop');
        ele.style.display="none";
        var ele= document.getElementById('slider-builder slider-mobile');
        ele.style.display="block";
    }
    if($(window).width() >=772 || screen.width >=772) {
        var ele = document.getElementById('slider-builder slider-desktop');
        ele.style.display="block";
        var ele= document.getElementById('slider-builder slider-mobile');
        ele.style.display="none";
    }
});

$(window).on('load', function (){
    if($(window).width() <= 568 || screen.width <=568) {
        var ele = document.getElementById('slider-builder slider-desktop');
        ele.style.display="none";
        var ele= document.getElementById('slider-builder slider-mobile');
        ele.style.display="block";
    }
    if($(window).width() >=772 || screen.width >=772) {
        var ele = document.getElementById('slider-builder slider-desktop');
        ele.style.display="block";
        var ele= document.getElementById('slider-builder slider-mobile');
        ele.style.display="none";
    }
});
