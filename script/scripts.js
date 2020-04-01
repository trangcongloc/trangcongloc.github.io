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
		$(".btn.about")
			.removeClass("non-select")
			.addClass("selected");
		$(".btn.home")
			.removeClass("selected")
			.addClass("non-select");
		$(".aboutpage").show();
		$(".skillspage").hide();
		$(".homepage").hide();
		$(".workspage").hide();
		$(".contactpage").hide();
	});

	// ? Skills nav
	$(".btn.skills").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".skillspage").show();
		$(".aboutpage").hide();
		$(".homepage").hide();
		$(".workspage").hide();
		$(".contactpage").hide();
	});

	// ? About nav
	$(".btn.about").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".aboutpage").show();
		$(".skillspage").hide();
		$(".homepage").hide();
		$(".workspage").hide();
		$(".contactpage").hide();
	});

	// ? Home nav
	$(".btn.home").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".homepage").show();
		$(".skillspage").hide();
		$(".aboutpage").hide();
		$(".workspage").hide();
		$(".contactpage").hide();
	});

	// ? Works nav
	$(".btn.works").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".workspage").show();
		$(".skillspage").hide();
		$(".homepage").hide();
		$(".aboutpage").hide();
		$(".contactpage").hide();
	});

	// ? Contact nav
	$(".btn.contact").click(function() {
		$(".loader-wrapper")
			.show()
			.delay(1000)
			.fadeOut("slow");
		$(".contactpage").show();
		$(".skillspage").hide();
		$(".homepage").hide();
		$(".workspage").hide();
		$(".aboutpage").hide();
	});
});
