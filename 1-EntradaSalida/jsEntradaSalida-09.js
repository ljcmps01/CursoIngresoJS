/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let porcentaje;

	//Guardo el valor de sueldo y porcentaje extra ingresado en su variable y la convierto a int
	sueldo=document.getElementById("txtIdSueldo").value;
	porcentaje=prompt("Ingresar porcentaje",10);
	sueldo=parseInt(sueldo);
	porcentaje=parseInt(porcentaje);


	//Aplico el aumento en la variable aumento
	aumento=sueldo*(100+porcentaje)/100;
	//La muestro en el cuadro de texto correspondiente
	document.getElementById("txtIdResultado").value=aumento;
}
