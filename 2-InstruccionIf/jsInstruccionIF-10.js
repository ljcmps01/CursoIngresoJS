/*
Campos Alejo
if 10
*/
function mostrar()
{
	let nota;

	nota=1+Math.floor(Math.random()*10)//Genero el número RANDOM entre 1 y 10 
	
	if(nota<4)
	{
		alert("Su nota es un "+nota+", vamos, la proxima se puede");
	}
	else
	{
		if(nota<9)
		{
			alert("Su nota es un "+nota+", APROBÓ");
		}
		else
		{
			alert("Su nota es un "+nota + ", EXCELENTE");
		}
	}
}//FIN DE LA FUNCIÓN