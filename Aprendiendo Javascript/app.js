console.log("WEEEEEEEEEEENA LOS CABROOOOOOOOO");
document.write("WEEEEEEEEEEENA LOS CABROOOOOOOOO");

// Tipos de datos
// String
var nombre = "Yeyo";
console.log(nombre);
console.log(typeof nombre);

// Number
var numero = 420;
console.log(numero);
console.log(typeof numero);

// Decimal
var decimal = 1000.1;
console.log(decimal);
console.log(typeof decimal);

// Boolean
var verdadero = true;
console.log(verdadero);
console.log(typeof verdadero);

// Array
var lenguajes = ["HTML", "CSS", "JS"];
console.log(lenguajes);
console.log(typeof lenguajes);

// Objeto
var persona = {
  nombre: "Yeyo",
  edad: 99,
  soltero: false,
};
console.log(persona);
console.log(typeof persona);

// = Asignación
// == Comparación
// === Comparación estricta
// != Diferente
// !== Diferente estricto
// > Mayor que
// < Menor que
// >= Mayor o igual que
// <= Menor o igual que

let uno =  1;
let dos = 2;

if(uno == dos){
  console.log("Son iguales");
}
else{
    console.log("Son diferentes");
    };

let tipoAlumno = "diurno";

switch(tipoAlumno){
    case "diurno":
        console.log("El alumno es diurno");
        break;
    case "vespertino":
        console.log("El alumno es vespertino");
        break;
    default:
        console.log("No es alumno");
        break;
}

// while
let num = 10;
while(num > 0){
    console.log(num);
    num--;
}


