/* Uso de funciones, variables y estructuras de control */

var d, minutes, time, hours, message;

// Utilizando el objeto Date de JS para trabajar con fechas, tiempo y timestamps
d = new Date(); /* Metodo especifico de JS */

hours = d.getHours(); /* Metodo especifico de JS --> getHours */
minutes = d.getMinutes(); /* Metodo especifico de JS --> getMinutes */

alert("Las hora es: " + hours); /* Un mensaje de tipo emergente */
alert("Minutos: " + minutes);

if(minutes < 10){
	minutes = "0" + minutes; // agrega un cero a la izquierda si son números menores a 10
} else {
	minutes = minutes.toString(); // convertir la variable `minutes` en un string o cadena de caracteres
}

if(hours < 10){
	hours = "0" + hours;
} else {
	hours = hours.toString();
}

alert("el tipo de dato de lo minutos y los segundos es: " + typeof(minutes) + " "+ typeof(hours)); /* concatena */

time = Number(hours + minutes); /* convertir a numero */


alert("La variable `time` convertida a un valor numerico es: " + time);

if(time >= 0000 && time < 1200){
	alert("Buenos días");
} else if(time >= 1200 && time < 1700){
	alert("Buenas tardes");
} else if(time >=1700 && time <= 2359){
	alert("Buenas noches");
}