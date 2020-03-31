$(function() {
	$(window).on("load", function() {
		$(".loader-wrapper")
			.delay(1000)
			.fadeOut("slow");
		$(".asking").hide();
	});
	$(".author").click(function() {
		$(".sor").toggleClass("hovmated");
	});
});
