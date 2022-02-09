/*
Campos Alejo
if 05 
*/

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);	//tomo la edad  

	if(edad<13)
	{
		alert("No es adolescente");
	}
	if(edad>17)
	{
		alert("No es adolescente");
	} 

}//FIN DE LA FUNCIÓN