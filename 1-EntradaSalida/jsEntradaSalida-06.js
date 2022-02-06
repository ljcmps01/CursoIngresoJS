/*
Campos Alejo
E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Defino variables
	let primerNumero;
	let segundoNumero;
	let suma;
	//Guardo la entrada en las variables
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	segundoNumero=document.getElementById('txtIdNumeroDos').value;

	//Convierto las entradas en variables enteras
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	//Hago la suma
	suma=primerNumero+segundoNumero;

	//Imprimo en alert la suma
	alert("la suma es "+suma);
}

