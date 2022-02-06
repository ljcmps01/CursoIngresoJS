/*
Campos Alejo
E/S 10-bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let porcentaje;

	//Guardo la entrada en las variables y las convierto en int
	importe=document.getElementById("txtIdImporte").value;
	porcentaje=prompt("Ingresar porcentaje",25);
	importe=parseInt(importe);
	porcentaje=parseInt(porcentaje);

	//Calculo el precio con el descuento y lo imprimo en el cuadro de resultado
	descuento=importe*(100-porcentaje)/100;
	document.getElementById("txtIdResultado").value=descuento;
}
