$(document).ready(function() {





	//.....SlIDER.....//

	$("#disc-slider-img").slick({
		dots: false,
		arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
	});

	
	//......CENTER......//

	$(window).resize(function() {
    	var halfwindow_height = (($(window).height()-$('.center').height())/2)+'px';
    	var halfWindow_width = (($(window).width()-$('.center').width())/2)+'px';
    	$('.center').css({
    	    bottom: halfwindow_height,
    	    left: halfWindow_width
    	});
	}).resize();

	$(window).resize(function() {
    	var window_height = (($(window).height()-$('.fs').height())/2)+'px';
    	var window_width = (($(window).width()-$('.fs').width())/2)+'px';
    	$('.fs').css({
    	    height: window_height,
    	    width: window_width
    	});
	}).resize();



	//......CENTER......//

	$(window).resize(function() {
		var wprofheaderheight = '-webkit-calc(100% - '+($('#profile-header').height())+'px)';
		var mprofheaderheight = '-moz-calc(100% - '+($('#profile-header').height())+'px)';
   		var profheaderheight = 'calc(100% - '+($('#profile-header').height())+'px)';
   		$('#favourites-list').css({
    		height: wprofheaderheight,
    		height: mprofheaderheight,
   			height: profheaderheight
   		});
	}).resize();

	//.....SIGN UP.....//

	$("#sign-up").hide();
	$("#signup_btn").click(function() {
		$("#sign-up").show();
	});
	$("#signup-backgroundfade").click(function() {
		$("#sign-up").hide();
	});

	//.....NAVIGATION.....//


	$("#home_btn").click(function() {
		$height = $("#pages").height();
		$(this).addClass("active");
		$("#events_btn, #hotels_btn, #travel_btn, #map_btn").removeClass("active");
		$("#page1").animate({
			bottom: 0,
		}, "slow");
		$("#page2").animate({
			bottom: -$height + 'px',
		}, "slow");
		$("#page3").animate({
			bottom: -$height + 'px',
		}, "slow");
		$("#page4").animate({
			bottom: -$height + 'px',
		}, "slow");
		$("#page5").animate({
			bottom: -$height + 'px',
		}, "slow");
	});

	$("#events_btn").click(function() {
		$height = $("#pages").height();
		$(this).addClass("active");
		$("#home_btn, #hotels_btn, #travel_btn, #map_btn").removeClass("active");
		$("#page1").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page2").animate({
			bottom: 0,
		}, "slow");
		$("#page3").animate({
			bottom: -$height + 'px',
		}, "slow");
		$("#page4").animate({
			bottom: -$height + 'px',
		}, "slow");
		$("#page5").animate({
			bottom: -$height + 'px',
		}, "slow");
	});

	$("#hotels_btn").click(function() {
		$height = $("#pages").height();
		$(this).addClass("active");
		$("#home_btn, #events_btn, #travel_btn, #map_btn").removeClass("active");
		$("#page1").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page2").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page3").animate({
			bottom: 0,
		}, "slow");
		$("#page4").animate({
			bottom: -$height + 'px',
		}, "slow");
		$("#page5").animate({
			bottom: -$height + 'px',
		}, "slow");
	});

	$("#travel_btn").click(function() {
		$(this).addClass("active");
		//update favourites
		$.ajax({
        	url: "favouriteupdate.php",
        	success: function(response) {
            	$('div#favourites-list').html(response);
            	$height = $("#pages").height();
		$("#home_btn, #events_btn, #hotels_btn, #map_btn").removeClass("active");
		$("#page1").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page2").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page3").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page4").animate({
			bottom: 0,
		}, "slow");
		$("#page5").animate({
			bottom: -$height + 'px',
		}, "slow");
        	}
        });

	});

	$("#map_btn").click(function() {
		$height = $("#pages").height();
		$(this).addClass("active");
		$("#home_btn, #events_btn, #hotels_btn, #travel_btn").removeClass("active");
		$("#page1").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page2").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page3").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page4").animate({
			bottom: +$height + 'px',
		}, "slow");
		$("#page5").animate({
			bottom: 0,
		}, "slow");
	});

	//.....PLACES LIST NAVIGATION.....//


	$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();


	$("#list-item-1").click(function() {
		$("#info-item-1").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-2").click(function() {
		$("#info-item-2").show();
		$("#info-item-1, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-3").click(function() {
		$("#info-item-3").show();
		$("#info-item-2, #info-item-1, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-4").click(function() {
		$("#info-item-4").show();
		$("#info-item-2, #info-item-3, #info-item-1, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-5").click(function() {
		$("#info-item-5").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-1, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-6").click(function() {
		$("#info-item-6").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-1, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-7").click(function() {
		$("#info-item-7").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-1, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-8").click(function() {
		$("#info-item-8").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-1, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-9").click(function() {
		$("#info-item-9").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-1, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-10").click(function() {
		$("#info-item-10").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-1, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-11").click(function() {
		$("#info-item-11").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-1, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-12").click(function() {
		$("#info-item-12").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-1, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-13").click(function() {
		$("#info-item-13").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-1, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-14").click(function() {
		$("#info-item-14").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-1, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-15").click(function() {
		$("#info-item-15").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-1, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-16").click(function() {
		$("#info-item-16").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-1, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-17").click(function() {
		$("#info-item-17").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-1, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-18").click(function() {
		$("#info-item-18").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-1, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-19").click(function() {
		$("#info-item-19").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-1, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-20").click(function() {
		$("#info-item-20").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-1, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-21").click(function() {
		$("#info-item-21").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-1, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-22").click(function() {
		$("#info-item-22").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-1, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

$("#list-item-23").click(function() {
		$("#info-item-23").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-1, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-24").click(function() {
		$("#info-item-24").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-1, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-25").click(function() {
		$("#info-item-25").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-1, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-26").click(function() {
		$("#info-item-26").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-1, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-27").click(function() {
		$("#info-item-27").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-1, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-28").click(function() {
		$("#info-item-28").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-1, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-29").click(function() {
		$("#info-item-29").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-1, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-30").click(function() {
		$("#info-item-30").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-1, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-31").click(function() {
		$("#info-item-31").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-1, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-32").click(function() {
		$("#info-item-32").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-1, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-33").click(function() {
		$("#info-item-33").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-1, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-34").click(function() {
		$("#info-item-34").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-1, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-35").click(function() {
		$("#info-item-35").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-1, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-36").click(function() {
		$("#info-item-36").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-1, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-37").click(function() {
		$("#info-item-37").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-1, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-38").click(function() {
		$("#info-item-38").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-1, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-39").click(function() {
		$("#info-item-39").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-1, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-40").click(function() {
		$("#info-item-40").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-1, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-41").click(function() {
		$("#info-item-41").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-1, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-42").click(function() {
		$("#info-item-42").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-1, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-43").click(function() {
		$("#info-item-43").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-1, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-44").click(function() {
		$("#info-item-44").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-1, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-45").click(function() {
		$("#info-item-45").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-1, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-46").click(function() {
		$("#info-item-46").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-1, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-47").click(function() {
		$("#info-item-47").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-1, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-48").click(function() {
		$("#info-item-48").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-1, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-49").click(function() {
		$("#info-item-49").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-1, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-50").click(function() {
		$("#info-item-50").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-1, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-51").click(function() {
		$("#info-item-51").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-1, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-52").click(function() {
		$("#info-item-52").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-1, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-53").click(function() {
		$("#info-item-53").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-1, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-54").click(function() {
		$("#info-item-54").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-1, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-55").click(function() {
		$("#info-item-55").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-1, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-56").click(function() {
		$("#info-item-56").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-1, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-57").click(function() {
		$("#info-item-57").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-1, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-58").click(function() {
		$("#info-item-58").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-1, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-59").click(function() {
		$("#info-item-59").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-1, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-60").click(function() {
		$("#info-item-60").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-1, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-61").click(function() {
		$("#info-item-61").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-1, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-62").click(function() {
		$("#info-item-62").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-1, #info-item-63, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-63").click(function() {
		$("#info-item-63").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-1, #info-item-64, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-64").click(function() {
		$("#info-item-64").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-1, #info-item-65, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-65").click(function() {
		$("#info-item-65").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-1, #info-item-66").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});

	$("#list-item-66").click(function() {
		$("#info-item-66").show();
		$("#info-item-2, #info-item-3, #info-item-4, #info-item-5, #info-item-6, #info-item-7, #info-item-8, #info-item-9, #info-item-10, #info-item-11, #info-item-12, #info-item-13, #info-item-14, #info-item-15, #info-item-16, #info-item-17, #info-item-18, #info-item-19, #info-item-20, #info-item-21, #info-item-22, #info-item-23, #info-item-24, #info-item-25, #info-item-26, #info-item-27, #info-item-28, #info-item-29, #info-item-30, #info-item-31, #info-item-32, #info-item-33, #info-item-34, #info-item-35, #info-item-36, #info-item-37, #info-item-38, #info-item-39, #info-item-40, #info-item-41, #info-item-42, #info-item-43, #info-item-44, #info-item-45, #info-item-46, #info-item-47, #info-item-48, #info-item-49, #info-item-50, #info-item-51, #info-item-52, #info-item-53, #info-item-54, #info-item-55, #info-item-56, #info-item-57, #info-item-58, #info-item-59, #info-item-60, #info-item-61, #info-item-62, #info-item-63, #info-item-64, #info-item-65, #info-item-1").hide();

		$(".list-item").removeClass("selected");
		$(this).addClass("selected");
	});


//......FAVOURTIES......//

	$(".fav_btn").click(function(){
        $(this).addClass("fav-on").delay(500).queue(function(next){
            $(this).removeClass("fav-on");
            next();
        });
		//set attraction id
        var AttractionID = $(this).attr('id');
        //alert(AttractionID);
        //ajax script
        $.ajax({
        	type: "POST",
        	url: "favourite.php",
        	data: { AttractionID : AttractionID },
        	success: function(data)
        	{
 				
        	},
        });
    });

	
//......MAP......//
	function initialize() {
		var mapProp = {
			center:new google.maps.LatLng(53.7961049,-1.5497250999999324),
			zoom:16,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
});

