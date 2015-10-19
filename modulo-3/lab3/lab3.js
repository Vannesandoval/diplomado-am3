
/* objetos y funciones */
var my_object = new Object(); /* es el elemento mas primitivo de JS*/

var other_object = {};


my_object = { /* */
	firstName: 'Vannessa',
	lastName: 'Latorre',
	phone: 538447475
};


console.log(my_object.firstName); /* se averigua el valor de la clave firstName */

console.log(my_object['lastName']); /* otra forma de averiguar el valor de la clave firstName */

var key;

for(key in my_object){ /* recorriendo o itinerando todo el objeto y muestre la informacion, la cual queda guardada en la variable key*/
	console.log(my_object[key]);
}

var objeto = {
	a: 'ejercicio',
	b: 'lab 3',
	c: 'octubre'
};

var i;

for (i in objeto){
	console.log(objeto[i]);
}

// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test(); /* llama la funcion, en este caso muestra el mensaje */

// usando funcion anonima

var bye_bye = function(){ /* Otra manera de realizar una funcion, pero esta casi no se utiliza */
	console.log('Que tengan una feliz semana santa'); 
}

bye_bye();