$(function(){
	let header = $("#header"), 
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();
	let introW =  +($("#intro").innerWidth());

	if(introW>770){
		introW = [900,1960,1961,5960,5961,8400,8401,8800,8801,10000];
	}else if(introW>575){
		introW = [800,2400,2401,7600,7601,10700,10701,12600,12601,15000];
	}else{
		introW = [800,2800,2801,7900,7901,13800,13801,15600,15601,18000];
	}



		// fixed header
		checkScroll(scrollOffset);

	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset){
		if(scrollOffset>=introH-75){
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}

		if(scrollOffset>=introW[0] && scrollOffset<introW[1]){
			$("#aboutlink").addClass('active');
			$("#servicelink").removeClass('active');
			$("#bloglink").removeClass('active');
			$("#workslink").removeClass('active');
			$("#contactlink").removeClass('active');
		}else if(scrollOffset>=introW[2] && scrollOffset<introW[3]){
			$("#servicelink").addClass('active');
			$("#aboutlink").removeClass('active');
			$("#bloglink").removeClass('active');
			$("#workslink").removeClass('active');
			$("#contactlink").removeClass('active');
		}else if(scrollOffset>=introW[4] && scrollOffset<introW[5]){
			$("#workslink").addClass('active');
			$("#aboutlink").removeClass('active');
			$("#bloglink").removeClass('active');
			$("#servicelink").removeClass('active');
			$("#contactlink").removeClass('active');
		}else if(scrollOffset>=introW[6] && scrollOffset<introW[7]){
			$("#bloglink").addClass('active');
			$("#aboutlink").removeClass('active');
			$("#workslink").removeClass('active');
			$("#servicelink").removeClass('active');
			$("#contactlink").removeClass('active');
		}else if(scrollOffset>=introW[8] && scrollOffset<introW[9]){
			$("#contactlink").addClass('active');
			$("#aboutlink").removeClass('active');
			$("#workslink").removeClass('active');
			$("#servicelink").removeClass('active');
			$("#bloglink").removeClass('active');
		}else{
			$("#contactlink").removeClass('active');
			$("#aboutlink").removeClass('active');
			$("#workslink").removeClass('active');
			$("#servicelink").removeClass('active');
			$("#bloglink").removeClass('active');
		}
	}

	// Smoth scroll

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		    let $this = $(this);
			let blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active");

			$("#nav").toggleClass("active");
			$("#nav_toggle").toggleClass("active");

			$("html, body").animate({
				scrollTop: blockOffset
			},500);
			$("#nav a").removeClass("active");
	});


	// Menu Nav toggle

	$("#nav_toggle").on("click", function(){
		event.preventDefault();
		$(this).toggleClass("active");
		 $("#header").toggleClass("active");
		$("#nav").toggleClass("active");
	})


});