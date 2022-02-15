/*
Campos Alejo
Switch 07
*/

function mostrar()
{
	let destinoIngresado
	destinoIngresado =document.getElementById("txtIdDestino").value;
	// alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("oeste");
			break;
		case "Ushuaia":
			alert("sur");
			break;
		case "Cataratas":
			alert("norte");
			break;
		case "Mar del plata":
			alert("este");
			break;
	}

}//FIN DE LA FUNCIÓN