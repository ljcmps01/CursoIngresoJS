/*
Campos Alejo
if 08
*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	estadoCivil=document.getElementById("estadoCivil").value;

	if(edad>17)
	{
		if(estadoCivil=="Soltero")
		{
			alert("Es soltero y no es menor");
		}
	}
}//FIN DE LA FUNCIÓN