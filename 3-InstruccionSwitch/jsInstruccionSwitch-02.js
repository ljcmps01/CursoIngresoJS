/*
Campos Alejo
Switch 02
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;
	alert(mesDelAño)

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Junio":
		case "Mayo":
		case "Abril":
		case "Marzo":
		case "Febrero":
		case "Enero":
			alert("Falta para el invierno");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}
}//FIN DE LA FUNCIÓN