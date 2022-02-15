/*
Campos Alejo
Switch 04
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;
	// alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Tiene 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días");
			break;
		default:
			alert("tiene 31 días");
	}

}//FIN DE LA FUNCIÓN