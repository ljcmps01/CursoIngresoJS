/*
Campos Alejo
For 03
*/
function mostrar()
{

	let contador;
	let repeticiones = prompt("ingrese el número de repeticiones");

	repeticiones=parseInt(repeticiones);
	
	for (let contador = 0; contador < repeticiones; contador++) 
	{
		document.write(contador+1+" Hola UTN FRA <br>");
	}


}//FIN DE LA FUNCIÓN