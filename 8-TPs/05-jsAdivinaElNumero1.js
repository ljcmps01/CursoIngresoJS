/*
Campos Alejo
TP 05
Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100);//Genero el número RANDOM entre 1 y 100
	contadorIntentos=0;
  //alert(numeroSecreto);

}

function verificar()
{
	let numeroIngresado;
  let diferencia;

  numeroIngresado=document.getElementById("txtIdNumero").value;
  numeroIngresado=parseInt(numeroIngresado);

  contadorIntentos++; //Aumento el contador

  if(numeroIngresado==numeroSecreto)
  {
    alert("Usted es el ganador!! en tan solo "+contadorIntentos+" intentos");
  }
  else
  {
    if(numeroIngresado>numeroSecreto)  
    {
      diferencia=numeroIngresado-numeroSecreto;
      alert("Se pasó por "+diferencia);
    }
    else
    {
      diferencia=numeroSecreto-numeroIngresado;
      alert("Le falta "+diferencia);
    }
  }
	
}