/*
Campos Alejo
E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaro las variables nombre y edad
	let nombre;		
	let edad;
	//Guardo los valores ingresados en los cuadros de texto en sus respectivas variables
	nombre=document.getElementById('txtIdNombre').value;	
	edad=document.getElementById('txtIdEdad').value;

	//Imprimo los valores ingresados en un alert
	alert("El nombre es "+nombre+" y la edad "+edad);
}

