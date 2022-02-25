/*
Campos Alejo
Switch 06
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let cantidadDeNumeros;
	let promedio;

	contador=0;
	acumulador=0;
	cantidadDeNumeros=5;
	
	while(contador<cantidadDeNumeros)
	{
		numeroIngresado=prompt("Ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador+=numeroIngresado;
		contador++;
	}
	
	promedio=acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN