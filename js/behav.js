$(function() {
	$('.infoIndicador').hide();
	$('.infoIndicador:nth-child(1)').fadeIn(500);
	$('.infoIndicador:nth-child(2)').delay(100).fadeIn(500);
	$('.infoIndicador:nth-child(3)').delay(200).fadeIn(500);



	$(".item").hover(
		function  () {
			$(this).find(".submenu1")
				.slideDown("fast");
		},
		function  () {
			$(this).find(".submenu1")
				.slideUp("fast");
		}
	);

});
