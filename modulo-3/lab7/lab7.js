/* Uso de funciones, variables y estructuras de control */

var a = prompt('Digite el numero 1:');
var b = prompt('Digite el numero 2:');

alert("el primer dato es:" + a + " " + "y el segundo dato es:" + b); /* Un mensaje de tipo emergente */

var comparaDatos = function(a,b){ /* Otra manera de realizar una funcion, pero esta casi no se utiliza */
	if(a > b){
		alert('la suma es:' + ' ' + (a+b));
		} else if (a < b){
			alert('la multiplicacion es:' + ' ' + (a*b));
		} else if(a === b){
			alert('la division es:' + ' ' + (a/b));
		}
}
comparaDatos(a,b);