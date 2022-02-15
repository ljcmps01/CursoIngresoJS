/*
Campos Alejo
Switch 08
*/

function mostrar()
{
	let destinoIngresado
	destinoIngresado =document.getElementById("txtIdDestino").value;
	// alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("calor");
			break;
	}

}//FIN DE LA FUNCIÓN