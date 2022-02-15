/*
Campos Alejo
Switch 10
*/

function mostrar()
{
	let destinoIngresado;
	let estacion;

	destinoIngresado =document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;
	// alert(destinoIngresado);

	switch(estacion)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case "Primavera":
				switch(destinoIngresado)
				{
					case "Bariloche":
						alert("No se viaja");
						break;
					default:
						alert("Se viaja");
				}
				break;
		//Este seria equivalente a case "Otoño" en este caso
		default:
			alert("se viaja");
	}
		
	precioFinal=precioBase*(porcentaje+100)/100;
	alert("Precio final: $"+precioFinal);

}//FIN DE LA FUNCIÓN