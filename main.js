import Factura from "./factura.js";
import Paciente from "./paciente.js";
import Casa from "./casa.js";

console.log("------EJERCICIO 1------");

let fechaFacturacion = new Date("03/22/2019").toLocaleDateString();
let f1 = new Factura("Juan Perez", "Madero", fechaFacturacion, "$530", "345B367");

f1.imprimir();

console.log("Número de factura: " + f1.numeroFactura);
console.log("Fecha de facturación: " + f1.fechaFactura);
console.log("Total facturado: " + f1.totalFactura);

f1.numeroFactura = "545C567";

console.log("Número de factura: " + f1.numeroFactura);

console.log("------EJERCICIO 2------");

let fechaNacimiento = new Date("05/03/1989").toLocaleDateString();
let p1 = new Paciente("Juan Perez", "Masculino", fechaNacimiento, "o+", "1.58", "70 kgs");

p1.imprimir(); 

console.log("Fecha de Nacimiento: " + p1.fechaNacimiento);

fechaNacimiento = new Date("03/04/1990").toLocaleDateString();

p1.fechaNacimiento = fechaNacimiento;
p1.peso = "85 kgs";
p1.estatura = "1.70";

p1.imprimir();

console.log("------EJERCICIO 3------");

let c1 = new Casa("Colima", "Bugambilias", "Ramón Villagran", "#345", "$1,560,000", "250 metros cuadrados", "2 habitaciones", "2 baños");