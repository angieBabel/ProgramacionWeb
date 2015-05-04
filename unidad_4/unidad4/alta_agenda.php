<h1>Alta de Contacto</h1>
<form id="frm1" action="graba_contacto.php" method="POST">
	Nombre:<br>
	<input size="40" type="text" name="nombre" id="nombre" placeholder="Nombre de contacto"><br>
	Teléfono(casa):<br>
	<input size="12" type="text" name="tel1" id="tel1" placeholder="(999) 99-999-99"><br>
	Teléfono(celular):<br>
	<input size="12" type="text" name="tel2" id="tel2" placeholder="999-9999999"><br>
	Correo electrónico:<br>
	<input size="30" type="text" name="email" id="email" placeholder="Correo electrónico"><br>
	fecha de nacimiento:<br>
	<input  type="text" name="fnac" id="fnac" placeholder="dd/mm/yyyy"><br><br>
	<button type="button" onclick="envia();" >Guardar contacto</button>
	<button type="button" onclick="limpia();">Salir</button>
</form>
<script>
	eval($("#fnac").mask("99/99/9999",{placeholder:"dd/mm/yyyy"}));
	eval($("#tel1").mask("(999) 99-999-99",{placeholder:"(999) 99-999-99"}));
	eval($("#tel2").mask("999-9999999",{placeholder:"999-9999999"}));
</script>
<?php

?>
