/*
Campos Alejo
Simulacro Final - Ejercicio 02
*/
function mostrar()
{
  let producto;
  let contadorDeBolsas;
  let cantidad;
  let precio;

  let respuesta;
  let primerCantidad;
  let primerPrecio;
  let precioMaximo;
  let cantidadMaxima;
  let tipoCantidadMaxima;
  let tipoPrecioMaximo;

  let precioBruto;
  let precioFinal;
  let descuento;

  contadorDeBolsas=0;
  cantidadArena=0;
  cantidadCal=0;
  cantidadCemento=0;

  precioBruto=0;
  descuento=0;
  
  respuesta=true;
  primerCantidad=true;
  primerPrecio=true;

  while(respuesta)
  {
    //Validacion del producto, que sea un producto valido, lo paso a lowercase para que sea de mas facil utilización
    producto=prompt("Ingresar producto: (arena, cal o cemento) ");
    producto=producto.toLowerCase();
    while(producto!="arena" && producto!="cal" && producto!="cemento")
    {
      producto=prompt("ERROR: Reingresar producto: (arena, cal o cemento) ");
    }
    
    //Validacion de la cantidad y precio, que sean numeros y mayores que 0
    cantidad=prompt("Ingresar cantidad de bolsas");
    cantidad=parseInt(cantidad);
    while(cantidad<1 || isNaN(cantidad))
    {
      cantidad=prompt("Ingresar cantidad de bolsas");
      cantidad=parseInt(cantidad);
    }

    precio=prompt("Ingresar precio por bolsas");
    precio=parseInt(precio);
    while(precio<1 || isNaN(precio))
    {
      precio=prompt("Ingresar precio de bolsas");
      precio=parseInt(precio);
    }
    //FIN VALIDACION

    //Acumulo la cantidad y el precio
    contadorDeBolsas+=cantidad;
    precioBruto+=(cantidad*precio);

    //Analizo si se superaron los maximos de cantidad y precio y guardo los tipos respectivos
    //en caso positivo
    if(primerCantidad||cantidad>cantidadMaxima)
    {
        cantidadMaxima=cantidad;
        tipoMayorCantidad=producto;
        primerCantidad=false;
    }

    if(primerPrecio||precio>precioMaximo)
    {
        precioMaximo=precio;
        tipoPrecioMaximo=producto;
        primerPrecio=false;
    }
    
    //Consulto si el usuario desea agregar mas productos
    respuesta=confirm("Desea ingresar mas producto?");
  }

  //Corroboro si corresponde aplicar descuento
  if(contadorDeBolsas>10)
  {
    if(contadorDeBolsas>30)
    {
      descuento=25;
    }
    else
    {
      descuento=15;
    }
  }

  //Imprimo el resultado en la pagina segun si hubo o no descuento
  if(descuento)
  {
    document.write("Valor bruto: $"+precioBruto+"<br>");
    precioFinal=precioBruto*(100-descuento)/100;
    document.write("Importe total a pagar (con descuento): $"+precioFinal+"<br>");
  }
  else
  {
    document.write("Importe total a pagar: $"+precioBruto+"<br>");
  }

  document.write("El tipo con mayor cantidad es: " +tipoMayorCantidad+ "<br>");
  document.write("El tipo con mas caro es: " +tipoPrecioMaximo+ "<br>");
  
}