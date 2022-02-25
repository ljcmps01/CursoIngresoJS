/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;

	let sumaNegativos;
	let sumaPositivos;

	let cantidadDeNegativos;
	let cantidadDePositivos;
	let cantidadDeCeros;
	let cantidadDePares;

	let promedioPositivos;
	let promedioNegativos;

	let diferenciaPositivoNegativo;

	let respuesta;

	sumaNegativos=0;
	sumaPositivos=0;

	cantidadDeNegativos=0;
	cantidadDePositivos=0;
	cantidadDeCeros=0;
	cantidadDePares=0;
	
	promedioPositivos=0;
	promedioNegativos=0;

	
	respuesta=true;
	
	
	while(respuesta)
	{
		numeroIngresado=prompt("Ingrese numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos+=numeroIngresado;
			cantidadDeNegativos++;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos+=numeroIngresado;
				cantidadDePositivos++;
			}
			else
			{
				if(numeroIngresado==0)
				{
					cantidadDeCeros++;
				}
			}
		}

		if(numeroIngresado%2==0)
		{
			cantidadDePares++;
		}

		respuesta=confirm("Desea ingresar mas numeros?");
	}

	document.write("la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("la cantidad de positivos es :"+cantidadDePositivos+"<br>");
	document.write("la cantidad de negativos es :"+cantidadDeNegativos+"<br>");	
	document.write("la cantidad de ceros es :"+cantidadDeCeros+"<br>");
	document.write("la cantidad de pares es :"+cantidadDePares+"<br>");

	if(cantidadDeNegativos>0)
	{
		promedioNegativos=sumaNegativos/cantidadDeNegativos;
		document.write("el promedio de negativos es :"+promedioNegativos+"<br>");
	}
	
	if(cantidadDePositivos>0)
	{
		promedioPositivos=sumaPositivos/cantidadDePositivos;
		document.write("el promedio de positivos es :"+promedioPositivos+"<br>");
	}
	
	
	

}//FIN DE LA FUNCIÓN