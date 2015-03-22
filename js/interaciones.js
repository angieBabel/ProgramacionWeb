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

//Cambia Color
	$('table tbody').on('click','tr', function(){
		var bc=$(this).css('background-color');

		if (bc === 'rgb(112, 186, 100)'){
			$(this).css ('background-color','rgb(255, 255, 255)');
			$(this).css('color','black');

		}else{
			$(this).css('background-color','rgb(112, 186, 100)');
			$(this).css('color','yellow');
		}

	});

	//Decir que fila es
	$('table tbody').on('click','tr',function(){
			var nf=$(this).text();
			$('#nof').val(nf);

			$('p').a

	});

});

//poner de color y que fila es y si se da click de nuevo debe quitar el color y desaparecer
