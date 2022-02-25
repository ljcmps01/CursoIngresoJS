/*
Campos Alejo
Simulacro Final - ejercicio 01
*/

function mostrar()
{
  let cantidadProductos;

  // barbijo, jabon o alcohol
  let productos=[];
  let precio=[];
  //Entre 0 a 1000 
  let cantidad=[];
  let marca=[];
  let fabricante=[];

  let primerIngreso;
  let alcoholBarato;
  let indexAlcoholMinimo;

  let cantidadBarbijos;
  let cantidadJabon;
  let cantidadAlcohol;
  let tipoMayorCantidad;
  let acumuladorMayorCantidad;
  let promedioMayorCantidad;
  let contadorMaximaCantidad;
  
  cantidadProductos=5;
  cantidadBarbijos=0;
  cantidadJabon=0;
  cantidadAlcohol=0;
  acumuladorMayorCantidad=0;
  contadorMaximaCantidad=0;

  primerIngreso=true;

  for(let i=0;i<cantidadProductos; i++)
  {
	  cantidad[i]=-1;
	  precio[i]=-1;
  }

  for (let contadorProductos = 0; contadorProductos < cantidadProductos; contadorProductos++) 
  {
    while (productos[contadorProductos]!="barbijo"&&productos[contadorProductos]!="jabon"&&productos[contadorProductos]!="alcohol")
    {
      productos[contadorProductos]=prompt("Ingresar el tipo de producto "+(contadorProductos+1)+": (barbijo, jabon o alcohol)");
    }

	while(precio[contadorProductos]<0||isNaN(precio[contadorProductos]))
	{
		precio[contadorProductos]=prompt("Ingresar el precio de producto "+(contadorProductos+1)+":");
	}
	precio[contadorProductos]=parseInt(precio[contadorProductos]);

	while(cantidad[contadorProductos]<0||isNaN(cantidad[contadorProductos])||cantidad[contadorProductos]>1000)
	{
		cantidad[contadorProductos]=prompt("Ingresar las unidades del producto "+(contadorProductos+1)+" a cargar:");
	}
	cantidad[contadorProductos]=parseInt(cantidad[contadorProductos]);

	while(!(marca[contadorProductos]))
	{
		marca[contadorProductos]=prompt("Ingresar marca del producto "+(contadorProductos+1)+":");
	}

	while(!(fabricante[contadorProductos]))
	{
		fabricante[contadorProductos]=prompt("Ingresar fabricante del producto "+(contadorProductos+1)+":");
	}
	
  }
  //Fin ingreso de productos

  //Imprimo las variables ingresadas
  document.write("productos: "+productos+"<br>");
  document.write("precios: "+precio+"<br>");
  document.write("cantidad: "+cantidad+"<br>");
  document.write("marca: "+marca+"<br>");
  document.write("fabricante: "+fabricante+"<br>");

  // Analizo cual es el alcohol mas barato y guardo su index para luego imprimirlo
  for (let contadorProductos = 0; contadorProductos < productos.length; contadorProductos++) 
  {
	  if(productos[contadorProductos]=="alcohol")
	  {
		if(primerIngreso||precio[contadorProductos]<alcoholBarato)
		{
			alcoholBarato=precio[contadorProductos];
			indexAlcoholMinimo=contadorProductos;
			primerIngreso=false;
		}
	  }	  
  }
  document.write("El alcohol mas barato tiene "+cantidad[indexAlcoholMinimo]+" de unidades y es del fabricante "+fabricante[indexAlcoholMinimo]+"<br>");


//Uso for para recorrer todos los productos ingresados e ir analizando en cada iteracion que tipo de producto es 
//y a su vez acumularlo a cantidad correspondiente segun su tipo
  for (let contadorProductos = 0; contadorProductos < productos.length; contadorProductos++) {
	switch (productos[contadorProductos]) {
		case "barbijo":
			cantidadBarbijos+= cantidad[contadorProductos];
			break;
		case "jabon":
			cantidadJabon+= cantidad[contadorProductos];
			break;
		case "alcohol":
			cantidadAlcohol+=cantidad[contadorProductos];
			break;
	} 
  }
  
  //Analizo cual es el tipo de producto con mayor unidades y lo guardo
  if(cantidadBarbijos>cantidadJabon)
  {
	  if(cantidadBarbijos>cantidadAlcohol)
	  {
		  tipoMayorCantidad="barbijo";
	  }
	  else
	  {
		  tipoMayorCantidad="alcohol";
	  }
  }
  else
  {
	  if(cantidadJabon>cantidadAlcohol)
	  {
		  tipoMayorCantidad="jabon";
	  }
	  else
	  {
		  tipoMayorCantidad="alcohol";
	  }
  }

  //Analizo los productos nuevamente y preparo las variables para calcular su promedio (suma total y cantidad de repeticiones)
  for (let contadorProductos = 0; contadorProductos < productos.length; contadorProductos++)
  {
	  if(productos[contadorProductos]==tipoMayorCantidad)
	  {
		  acumuladorMayorCantidad+=precio[contadorProductos];
		  contadorMaximaCantidad++;
	  }
  }
  //Calculo el promedio
  promedioMayorCantidad=acumuladorMayorCantidad/contadorMaximaCantidad;
  document.write("El producto con mayor unidades es el "+ tipoMayorCantidad+" y su precio promedio es: $"+promedioMayorCantidad+"<br>");

  //Imprimo la cantidad de jabones obtenida anteriormente
  document.write("El jabon tiene "+cantidadJabon+ " unidades")+"<br>";
}
