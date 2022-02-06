/*1.	
Campos Alejo
TP 01
        Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaro las variables necesarias
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let suma;

    //Recibo los datos ingresados en los cuadros de texto
    primerPrecio=document.getElementById("txtIdPrecioUno").value;
    segundoPrecio=document.getElementById("txtIdPrecioDos").value;
    tercerPrecio=document.getElementById("txtIdPrecioTres").value;

    //Convierto las entradas de string a int
    primerPrecio=parseInt(primerPrecio);
    segundoPrecio=parseInt(segundoPrecio);
    tercerPrecio=parseInt(tercerPrecio);

    //Sumamos las variables ingresadas
    suma=primerPrecio+segundoPrecio+tercerPrecio;

    //Imprimo el mensaje de salida en forma de alerta
    alert("La suma total de los productos es de : $"+suma)


}
function Promedio () 
{
    //Declaro las variables necesarias
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let promedio;

    //Recibo los datos ingresados en los cuadros de texto
    primerPrecio=document.getElementById("txtIdPrecioUno").value;
    segundoPrecio=document.getElementById("txtIdPrecioDos").value;
    tercerPrecio=document.getElementById("txtIdPrecioTres").value;

    //Convierto las entradas de string a int
    primerPrecio=parseInt(primerPrecio);
    segundoPrecio=parseInt(segundoPrecio);
    tercerPrecio=parseInt(tercerPrecio);

    //Saco el promedio del precio de los productos y lo guardo en la variable
    promedio=(primerPrecio+segundoPrecio+tercerPrecio)/3;

    //Imprimo en alerta en promedio
    alert("El promedio total de los productos es de : $"+promedio)
}
function PrecioFinal () 
{
    //Declaro las variables necesarias
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let precioFinal;
    let impuestoIVA;

    //Recibo los datos ingresados en los cuadros de texto
    primerPrecio=document.getElementById("txtIdPrecioUno").value;
    segundoPrecio=document.getElementById("txtIdPrecioDos").value;
    tercerPrecio=document.getElementById("txtIdPrecioTres").value;

    //Convierto las entradas de string a int
    primerPrecio=parseInt(primerPrecio);
    segundoPrecio=parseInt(segundoPrecio);
    tercerPrecio=parseInt(tercerPrecio);

    //Guardo en la variable el calculo para sacar el porcentaje del IVA
    impuestoIVA=(100+21)/100;

    //Saco el promedio del precio de los productos y lo guardo en la variable
    precioFinal=(primerPrecio+segundoPrecio+tercerPrecio)*impuestoIVA;

    //Imprimo en alerta en promedio
    alert("La suma total de los productos es de : $"+precioFinal)
}