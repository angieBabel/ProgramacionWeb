function carga(item){
	$('#contenido').hide();	
	$.ajax({ 
       url: item,
       success: function(data){
          $('#contenido').html(data);
          $('#contenido').fadeIn('slow');

       }
	});
}

function envia(){
	$.ajax({
		type: 'POST',
		url: $('#frm1').attr('action'),
		data: $('#frm1').serialize(),
		success: function(data){
            alert('Contacto agregado');
            $('#frm1')[0].reset();
		}
	});
}
function limpia(){
	$('#contenido').html('');
	$('#contenido').hide();		
}