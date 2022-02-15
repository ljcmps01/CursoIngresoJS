/*
Campos Alejo
Switch 01
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!.");
			break;
	}


}//FIN DE LA FUNCIÓN