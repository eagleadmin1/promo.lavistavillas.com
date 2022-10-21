$(function() {
	$(".accordion__title").on("click", function(e) {
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
		}
		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
	});
});