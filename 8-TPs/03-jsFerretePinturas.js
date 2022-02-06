/*3.	
Campos Alejo
TP 03
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Declaro las variables a utilizar
	let temperatura;
    let Celsius;

    //Recibo la entrada en la variable temperatura y la convierto a int
    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);

    //Hago el calculo de conversión de Fahrenheit a celsius
    Celsius=(temperatura-32)/1.8;

    //Imprimo la conversion con un decimal
    alert(temperatura+" Fahrenheit son "+Celsius.toFixed(1)+"°C");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let Fahrenheit;
    
    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);

    Fahrenheit=temperatura*1.8+32;

    alert(temperatura+"°C son "+Fahrenheit.toFixed(1)+" Fahrenheit");
}
