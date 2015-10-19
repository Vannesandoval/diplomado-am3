/* Array en JavaScript */

//'use strict';

var primer = ['clase', 'octubre', 10, 2015, 0, 123, 'uno', 'tres', 'cuatro', 'dos', 'cinco', 456, 789, 147, 258, 369];
console.log(primer);

primer.sort();
console.log(primer);

primer.push("primer elemento agregado"); /* se dirije al ultimo dato del arreglo*/
console.log(primer);

primer.shift();
console.log(primer);

segundo = ['futbol', 'basket', 1989, 2005, 2014, 'uno', 'tres', 'cuatro', 'dos', 'cinco'];
segundo.splice(5,0, 'carros', 'juegos', 'controles'); /* el 5 indica la posicion y el 0 indica los elementos que queremos eliminar*/
console.log(primer);
console.log (segundo);