$(function() {
	$(window).on("load", function() {
		$(".loader-wrapper")
			.delay(1000)
			.fadeOut(700);
	});
	$(".content-box").click(function() {
		$(".social").toggleClass("animated");
	});
});
