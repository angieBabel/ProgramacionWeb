$(document).ready(function(){

	$('#accion').click(function(){
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

	$('#tabla tr').click(function{
		background-color('yellow')
	});

});

//poner de color y que fila es y si se da click de nuevo debe quitar el color y desaparecer