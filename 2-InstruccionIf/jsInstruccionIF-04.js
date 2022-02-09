/*
Campos Alejo
if 04 con doble comparador
*/

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);	//tomo la edad  

	if(edad>12 && edad<18)
	{
		alert("Es adolescente");
	}

}//FIN DE LA FUNCIÓN