console.log ("entro a archivo interacciones.js")


let nombres = [
    "Norberto",
    "Kathe",
    "Karla",
    "Daniel",
    "Alfredo",
    "Jose",
    "Daniela",
    "Berenice",
    "Adrian",
];

let platillos = [
    "tacos",
    "mole",
    "paella",
    "sushi",
    "buñuelos",
    "changua"
];

console.log ("Elementos arreglo:", nombres.length);

//for (let index = 0; index < nombres1.length; index++) {
    //console.log (nombres1 [index])


platillos.forEach(platillo => {
    console.log (platillo);
})

nombres.forEach (nombre => {
    console.log (nombre);
});


let nuevoArreglo = nombres.map (nombre => {
    return "* " + nombre.toUpperCase ();
});

console.log (nombres);
console.log (nuevoArreglo);

let nombreFiltrados = nombres.filter(nombre => {
    return nombre.length < 6;
});

console.log (nombreFiltrados)
