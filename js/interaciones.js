$(document).ready(function(){

	alert('Se cargo la pagina');
	$('#accion').click(function(){
		$('#uno').toggle();
	})
	$('#uno').mouseenter(function(){
		$(this).css('background-color','yellow');
	})

});
/*var a= function(){
	console.log('texto');
};
function na(){
	console.log('texto2');
};*/