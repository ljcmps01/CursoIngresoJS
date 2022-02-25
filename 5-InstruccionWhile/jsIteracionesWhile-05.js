/*
Campos Alejo 
While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}

	if(sexoIngresado=="f")
	{
		sexoIngresado="femenino";
	}

	if(sexoIngresado=="m")
	{
		sexoIngresado="masculino";
	}


	document.getElementById("txtIdSexo").value=sexoIngresado;
}//FIN DE LA FUNCIÓN