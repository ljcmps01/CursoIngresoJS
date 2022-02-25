/*
Campos Alejo 
While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar()
{
	let claveIngresada;
	let claveCorrecta;

	claveCorrecta="utn750";
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!=claveCorrecta)
	{
		claveIngresada = prompt("ingrese el número clave.");
	}
	alert("Clave correcta ingresada!");
		
}//FIN DE LA FUNCIÓN
