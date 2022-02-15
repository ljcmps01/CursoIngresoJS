/*
Campos Alejo
Switch 03
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 días");
			break;
		default:
			alert("Este mes tiene 30 o mas días");
	}
}//FIN DE LA FUNCIÓN