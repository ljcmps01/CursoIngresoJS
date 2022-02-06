/*2.
Campos Alejo
TP02
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Defino las variables necesarias
    let largo;
    let ancho;
    let metrosAlambre;
    let vueltas=3;
    
    //Guardo la entrada del usuario en las variables
    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    //las convierto en int
    largo=parseInt(largo);
    ancho=parseInt(ancho);

    //Hago el calculo de la cantidad de alambre necesario y lo imprimo
    metrosAlambre=(largo+ancho)*2*vueltas;
    alert("Se requieren "+metrosAlambre+"m de alambre")

}
function Circulo () 
{
    //Defino las variables necesarias
    let radio;
    let metrosAlambre;

    //Guardo el radio de entrada del usuario
    radio=document.getElementById("txtIdRadio").value;

    //la convierto en int
    radio=parseInt(radio);    

    //Hago el calculo de la cantidad de alambre necesario y lo imprimo
    metrosAlambre=2*Math.PI*radio*3;
    alert("Se requieren "+metrosAlambre+"m de alambre")
}

function Materiales () 
{
    //Defino las variables necesarias
    let largo;
    let ancho;
    let cal;
    let cemento;
    let metrosCuadrados
    
    //Guardo la entrada del usuario
    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    //las convierto en int
    largo=parseInt(largo);
    ancho=parseInt(ancho);

    //Hago el calculo de area y en base a eso calculo los materiales necesarios
    metrosCuadrados=largo*ancho;
    cemento=2*metrosCuadrados;
    cal=3*metrosCuadrados;

    //Imprimo los materiales necesarios calculados
    alert("Se requieren "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}