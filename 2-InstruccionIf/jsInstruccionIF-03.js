/*
Campos Alejo
If 03
*/

function mostrar()
{
	let edad;
	let umbral=18;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);	//tomo la edad  
	

	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	if(edad<18)
	{
		alert("Es menor de edad");
	}
		

}//FIN DE LA FUNCIÓN