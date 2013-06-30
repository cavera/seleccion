$(function() {
	$('.infoIndicador').hide();
	$('.infoIndicador:nth-child(1)').fadeIn(500);
	$('.infoIndicador:nth-child(2)').delay(100).fadeIn(500);
	$('.infoIndicador:nth-child(3)').delay(200).fadeIn(500);


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
// progress

	var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
    progressbar.progressbar({
      value: false,
      // create: function  () {
      //   progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      // },
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Completo" );
      }
    });

// temporal, solo para probar comportamiento
	function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
      progressbar.progressbar( "value", val + 1 );
      var ancho = progressbar.width()- $('.ui-widget-header').width() + 3;
      progressLabel.css('right',ancho+"px");
      if ( val < 99 ) {
        setTimeout( progress, 100 );
      }
    }
    setTimeout( progress, 3000 );


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
