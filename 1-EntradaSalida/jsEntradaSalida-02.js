/*
Campos Alejo Rodrigo
e/s 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado=prompt("Ingresar nombre"); 		//Salta el cartel pop up pidiendo el nombre
	alert("su nombre es "+nombreIngresado);			//Salta el cartel mostrando la entrada del usuario
}