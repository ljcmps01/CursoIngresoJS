/*
Campos Alejo
if 06
*/
function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);	//tomo la edad  

	//Si es menor que 13
	if(edad<13)
	{
		alert("Es un niño");	//Es niño
	}
	
	//Caso contrario
	else
	{
		//Si es mayor que 17
		if(edad>17)
		{
			alert("Es mayor de edad"); //Es mayor de edad
		} 
		//Caso contrario a todo lo anterior
		else
		{
			alert("adolescente");	//Solo puede ser adolescente
		}
		
	}
}//FIN DE LA FUNCIÓN