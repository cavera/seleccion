$(function() {
	$('.infoIndicador').hide();

	$.each($('.infoIndicador'), function(index) {
		 $(this).delay(parseInt(index * 150)).fadeIn(500);
	});



// menu
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
// fecha
	var $datePicker = $('input[name^="fecha"]');
	$datePicker.datepicker({ dateFormat: "dd-mm-yy" });

	var checkCabeza = $('th');
	function cambiarCabeza (elemento) {
		elemento.change(
		function  () {
			if ($(this).is(':checked')) {
				$(this).parent().addClass('th_selected');
			}else{
				$(this).parent().removeClass('th_selected');
			}
		});
	}

	cambiarCabeza(checkCabeza);

// editar filas

	var $checkFila = $('tbody input[type="checkbox"]');

	function editarFila (elemento) {
		elemento.change(
		function(){
			if($(this).is(':checked'))
			{
				$(this).closest('tr').find('td').addClass('editable');
				$(this).closest('tr').find('td').attr('contenteditable','true');
			}
			else
			{
				$(this).closest('tr').find('td').removeClass('editable');
				$(this).closest('tr').find('td').attr('contenteditable','false');
			}
			$(this).parent().attr('contenteditable','false');
		}).change();
	}

	editarFila($checkFila);

});
