$(function() {
	$(window).on("load", function() {
		$(".loader-wrapper")
			.delay(1000)
			.fadeOut("slow");
	});
	$(".btn").click(function() {
		$(".selected")
			.removeClass("selected")
			.addClass("non-select");
		$(this)
			.addClass("selected")
			.removeClass("non-select");
	});
	// ? About Me Button
	$(".about-me").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".btn-about")
			.removeClass("non-select")
			.addClass("selected");
		$(".btn-home")
			.removeClass("selected")
			.addClass("non-select");
		$(".about-page").show();
		$(".skills-page").hide();
		$(".home-page").hide();
		$(".works-page").hide();
		$(".contact-page").hide();
	});

	// ? Skills nav
	$(".btn-skills").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".skills-page").show();
		$(".about-page").hide();
		$(".home-page").hide();
		$(".works-page").hide();
		$(".contact-page").hide();
	});

	// ? About nav
	$(".btn-about").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".about-page").show();
		$(".skills-page").hide();
		$(".home-page").hide();
		$(".works-page").hide();
		$(".contact-page").hide();
	});

	// ? Home nav
	$(".btn-home").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".home-page").show();
		$(".skills-page").hide();
		$(".about-page").hide();
		$(".works-page").hide();
		$(".contact-page").hide();
	});

	// ? Works nav
	$(".btn-works").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".works-page").show();
		$(".skills-page").hide();
		$(".home-page").hide();
		$(".about-page").hide();
		$(".contact-page").hide();
	});

	// ? Contact nav
	$(".btn-contact").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".contact-page").show();
		$(".skills-page").hide();
		$(".home-page").hide();
		$(".works-page").hide();
		$(".about-page").hide();
	});
});
