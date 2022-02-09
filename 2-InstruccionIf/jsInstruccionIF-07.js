/*
Campos Alejo
if 07
*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	estadoCivil=document.getElementById("estadoCivil").value;

	edad=parseInt(edad);	

	if(edad<18)
	{
		if(estadoCivil!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}
}