/*
Campos Alejo
E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Defino variables
	let primerNumero;
	let segundoNumero;
	let resultado;
	//Guardo la entrada en las variables
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	segundoNumero=document.getElementById('txtIdNumeroDos').value;

	//Convierto las entradas en variables enteras
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	//Hago el calculo
	resultado=primerNumero+segundoNumero;

	//Imprimo en alert el resultado
	alert("la suma es "+resultado);	
}

function restar()
{
	//Defino variables
	let primerNumero;
	let segundoNumero;
	let resultado;
	//Guardo la entrada en las variables
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	segundoNumero=document.getElementById('txtIdNumeroDos').value;

	//Convierto las entradas en variables enteras
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	//Hago el calculo
	resultado=primerNumero-segundoNumero;

	//Imprimo en alert el resultado
	alert("la resta es "+resultado);
}

function multiplicar()
{ 
	//Defino variables
	let primerNumero;
	let segundoNumero;
	let resultado;
	//Guardo la entrada en las variables
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	segundoNumero=document.getElementById('txtIdNumeroDos').value;

	//Convierto las entradas en variables enteras
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	//Hago el calculo
	resultado=primerNumero*segundoNumero;

	//Imprimo en alert el resultado
	alert("la multiplicacion es "+resultado);
}

function dividir()
{
	//Defino variables
	let primerNumero;
	let segundoNumero;
	let resultado;
	//Guardo la entrada en las variables
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	segundoNumero=document.getElementById('txtIdNumeroDos').value;

	//Convierto las entradas en variables enteras
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	//Hago el calculo
	resultado=primerNumero/segundoNumero;

	//Imprimo en alert el resultado
	alert("la división es "+resultado);
}

