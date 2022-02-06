/*
Campos Alejo
E/S 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro las variables
	let dividendo;
	let divisor;
	let resto;

	//Guardo las entradas en las variables
	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;

	//Convierto las variables en enteros
	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	//Hago el calculo
	resto=dividendo%divisor;
	
	//Imprimo el resultado
	alert("el resto de la cuenta es: " + resto);
}
