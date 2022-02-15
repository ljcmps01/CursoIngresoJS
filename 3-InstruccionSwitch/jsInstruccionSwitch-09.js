/*
Campos Alejo
Switch 09
*/

function mostrar()
{
	let destinoIngresado;
	let estacion;
	let precioBase;
	let porcentaje;
	let precioFinal;


	precioBase=15000;
	porcentaje=0;
	destinoIngresado =document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;
	// alert(destinoIngresado);

	switch(estacion)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje= -10;
					break;
				case "Mar del plata":
					porcentaje= -20;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje= -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje=10;
					break;
				case "Mar del plata":
					porcentaje=20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
				switch(destinoIngresado)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						porcentaje=10;
						break;
				}
				break;
	}
		
	precioFinal=precioBase*(porcentaje+100)/100;
	alert("Precio final: $"+precioFinal);

}//FIN DE LA FUNCIÓN