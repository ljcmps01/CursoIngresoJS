/*
Campos Alejo
Switch 07
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";
	
	
	while(respuesta)
	{
		numeroIngresado=prompt("Ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador+=numeroIngresado;
		contador++;
		respuesta=confirm("Desea ingresar mas numeros?");
	}
	
	promedio=acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN