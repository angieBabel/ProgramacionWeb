$(document).ready(function(){

	$('#add').click(function(){
		var ncolumnas=$('tr:last td', $("#tabla")).length;
		var nrenglon=$('#tabla tr').length;
		var columna='<tr>';

		for(var i=0;i<ncolumnas;i++){
			
			if (i>0){
				columna+='<td></td>';
			}else
			{
				columna+='<td>'+nrenglon+'</td>';
			};
		};
		columna+='</tr>';
		$("#tabla").append(columna);
	});

	$('#del').click(function(){
		var colum=$("#tabla tr").length;
            if(colum>1)
            {
                $("#tabla tr:last").remove();
            }

	});

	$('table tbody').on('click','tr', function(){
		var nf=$(this).text();
		var bc=$(this).css('background-Color');
		alert(bc)
		//0,128,0
		/*if( ($(this).css('background-color'))== rgba(0,0,0,0) ){*/
			//alert('aqui');
			$(this).css('background-color','green');
			$(this).css('color','yellow');			
		/*}
		else
		{
			
			$(this).css('color','black');				
		}*/

		$('#nof').val(nf);
	});
});

//poner de color y que fila es y si se da click de nuevo debe quitar el color y desaparecer