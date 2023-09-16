const arreglo1 = ["chilaquiles", "enchiladas", "tortillas" , "quesadillas"]


console.log(arreglo1 [0], "-Posicion 0");
console.log(arreglo1 [1], "-Posicion 1");
console.log(arreglo1 [2], "-Posicion 2"); 
console.log(arreglo1 [3], "-Posicion 3");  

//Console.log ("la comida del dia es:" +arreglo [3]);
console.log (`la comida del dia es: ${arreglo1[3]}`);

arreglo1 [3] = "tacos"
console.log (arreglo1 [3], "Nueva posicion 3");
console.log ("mutacion de arreglo", arreglo1);


//let nombreUsuario = prompt ("Cual es tu nombre?");
//let apellidoUsuario = prompt ("cual es tu apellido");

//console.log (`El numbre de usuario es: ${nombreUsuario} ${apellidoUsuario}`)

//arreglo1[4] = nombreUsuario + apellidoUsuario
arreglo1[4] = "Burrito"

console.log (arreglo1, "hay un nombre en lugar de comida")

console.log ("El largo del arreglo es:", arreglo1.length)

//arreglo1.push ("Sopa Tortilla"),

//arreglo1.pop();

//arreglo1.pop()

// lo manda al incio dl arreglo 
//arreglo1.shift ();

let largoArreglo = arreglo1.length;
let posicionMenosDos = largoArreglo - 2;
console.log (arreglo1 [posicionMenosDos])

//Primer parametro es el index (posicion) segundo es la cantidad de elmentos

arreglo1.splice(3,2);


console.log(arreglo1);