/*Reto 1 */
/*
let arreglo = [2, 6, 1, 8]
let suma = 0
for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i]
}
let promedio = suma / arreglo.length
console.log("El promedio es: " + promedio)
*/

/*Reto 2 */

/*
let arreglo = [1, 2, 5, 8, 9, 12, 2, 3]
let suma = 0
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
        suma += arreglo[i]
    }
}
console.log("La suma de los números pares es: " + suma)
*/

/*Reto 3 */

/*
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
    },
];

let availableBooks = " ";

for (let element of library) {
    if (element.readingStatus) {
        availableBooks += `El libro ${element.title} del autor ${element.author} está disponible.\n`;
    }
}
console.log(availableBooks);
*/

/*Reto 4 */

/*
let arreglo1 = [2, 5, 2, 3, 7, 2]
let arreglo2 = [1, 5, 3, 3]
let arregloNuevo = []
for (let elemento of arreglo1) {
    arregloNuevo.push(elemento)
}
for (let elemento of arreglo2) {
    arregloNuevo.push(elemento)
}
console.log(arregloNuevo)
if (arregloNuevo.length < 10) {
    console.log("false")
} else {
    console.log("true")
}
*/

/*Reto 5 */
/*
let arreglo1 = [2, 5, 2]
let arreglo2 = [1, 5, 3]
let arregloNuevo = []

function combinarArreglos(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        array1[i] = array1[i] * 2
    }
    for (let i = 0; i < array2.length; i++) {
        array2[i] = array2[i] * 2
    }
    arregloNuevo = array1.concat(array2)
    return console.log(arregloNuevo)

}
combinarArreglos(arreglo1, arreglo2)
*/

/*Reto 6 */

/*
let num1 = prompt("Ingrese el primer número:")
let num2 = prompt("Ingrese el segundo número:")
for (let i = 1; i <= 50; i++) {

    if (num1 == i || num2 == i) {
        console.log("¡Lotería!")
    } else {
        console.log(i)
    }
}
*/

/*Reto 7 */
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
*/

/*Reto 8 */

/*
let nota = +prompt("Ingrese la nota del estudiante (0-10):")
if (nota >= 0 && nota < 6) {
    console.log("Reprobado")
} else if (nota >= 6 && nota < 8) {
    console.log("Regular")
} else if (nota > 8 && nota <= 9) {
    console.log("Bien")
} else if (nota > 9 && nota <= 10) {
    console.log("Excelente")
} else {
    console.log("¡Error! Nota inválida")
}
*/

/*Reto 9 */

/*
let diametro = +prompt("Ingrese el diámetro de la rueda:")
let grosor = +prompt("Ingrese el grosor de la rueda:")
if (diametro > 1.4) {
    console.log("La rueda es para un vehículo grande")
} else if (diametro > 0.8 && diametro <= 1.4) {
    console.log("La rueda es para un vehículo mediano")
} else if (diametro > 0 && diametro <= 0.8) {
    console.log("La rueda es para un vehículo pequeño")
} else {
    console.log("¡Error! Diámetro inválido")
}

if ((diametro > 1.4 && grosor < 0.4) || (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25)) {
    console.log("“El grosor para esta rueda es inferior al recomendado")
}
*/

/*Reto 10 */


/*
console.info("¡Bienvenido a nuestra heladería!")
let topping = prompt("¿Desea agregar un topping a su helado? (si/no)").toLowerCase()
let precioHelado = 50;
if (topping == "si") {
    let tipoTopping = prompt("Ingrese el tipo de topping que desea (oreo, kitkat, brownie):").toLowerCase()
    switch (tipoTopping) {
        case "oreo":
            console.log(`El topping de oreo cuesta S/. ${precioHelado + 10}`)
            break
        case "kitkat":
            console.log(`El topping de kitkat cuesta S/.${precioHelado + 15}`)
            break
        case "brownie":
            console.log(`El topping de brownie cuesta S/.${precioHelado + 20}`)
            break
        default:
            console.log("No tenemos este topping, lo sentimos")
            break
    }
} else if (topping == "no") {
    console.log(`El helado sin topping cuesta S/${precioHelado}`)
}
*/


/*Reto 11 */


/*
console.info("¡Bienvenido a nuestro portal educativo!")
let total;
let nivel = prompt("Ingrese su nivel educativo (course, carrera, master):").toLowerCase()
let tipoBeca = prompt("Ingrese el tipo de beca que posee (facebook, google, jesua):").toLowerCase()
switch (nivel) {
    case "course":
        total = 4999;
        console.log(`El costo total de su nivel educativo es: S/.${total}`);
        
        if (tipoBeca == "facebook") {
            total = total * 0.8;
            console.log(`El costo total con la beca de Facebook es: S/.${total}`);
            console.log(`El costo total con la beca de Facebook anual es: S/.${total * 2}`);
        } else if (tipoBeca == "google") {
            total = total * 0.85;
            console.log(`El costo total con la beca de Google es: S/.${total}`);
            console.log(`El costo total con la beca de Google anual es: S/.${total * 2}`);
        } else if (tipo == "jesua") {
            total = total * 0.5;
            console.log(`El costo total con la beca de Jesua es: S/.${total}`);
            console.log(`El costo total con la beca de Jesua anual es: S/.${total * 2}`);
        } else {
            console.log("Tipo de beca no válido o no tiene beca.");
            console.log(`El costo total sin beca es: S/.${total}`);
            console.log(`El costo total sin beca anual es: S/.${total * 2}`);
        }
        break;
    case "carrera":
        total = 3999;
        console.log(`El costo total de su nivel educativo es: S/.${total}`);
       
        if (tipoBeca == "facebook") {
            total = total * 0.8;
            console.log(`El costo total con la beca de Facebook es: S/.${total}`);
            console.log(`El costo total con la beca de Facebook anual es: S/.${total * 6}`);
        } else if (tipoBeca == "google") {
            total = total * 0.85;
            console.log(`El costo total con la beca de Google es: S/.${total}`);
            console.log(`El costo total con la beca de Google anual es: S/.${total * 6}`);
        } else if (tipo == "jesua") {
            total = total * 0.5;
            console.log(`El costo total con la beca de Jesua es: S/.${total}`);
            console.log(`El costo total con la beca de Jesua anual es: S/.${total * 6}`);
        } else {
            console.log("Tipo de beca no válido o no tiene beca.");
            console.log(`El costo total sin beca es: S/.${total}`);
            console.log(`El costo total sin beca anual es: S/.${total * 6}`);
        }

        break;
    case "master":
        total = 2999;
        console.log(`El costo total de su nivel educativo es: S/.${total}`);
        
        if (tipoBeca == "facebook") {
            total = total * 0.8;
            console.log(`El costo total con la beca de Facebook es: S/.${total}`);
            console.log(`El costo total con la beca de Facebook anual es: S/.${total * 12}`);
        } else if (tipoBeca == "google") {
            total = total * 0.85;
            console.log(`El costo total con la beca de Google es: S/.${total}`);
            console.log(`El costo total con la beca de Google anual es: S/.${total * 12}`);
        } else if (tipo == "jesua") {
            total = total * 0.5;
            console.log(`El costo total con la beca de Jesua es: S/.${total}`);
            console.log(`El costo total con la beca de Jesua anual es: S/.${total * 12}`);
        } else {
            console.log("Tipo de beca no válido o no tiene beca.");
            console.log(`El costo total sin beca es: S/.${total}`);
            console.log(`El costo total sin beca anual es: S/.${total * 12}`);
        }
        break;
    default:
        console.log("Nivel educativo no válido.");
        break;
}
*/




/*Reto 12 */

/*
let tipoVehiculo = prompt("Ingrese el tipo de vehículo ( coche, moto, autobus):").toLowerCase()
let kmRecorridos = +prompt("Ingrese los kilómetros recorridos:")
let total;

switch (tipoVehiculo) {
    case "moto":
        if (kmRecorridos <= 100 && kmRecorridos > 0) {
            total = kmRecorridos * 0.10 + 5
        } else if (kmRecorridos > 100) {
            total = kmRecorridos * 0.10 + 10
        } else if (typeof kmRecorridos !== 'number' || kmRecorridos < 0) {
            console.log("¡Error! Kilómetros inválidos")
        }
        console.log(`El costo total del viaje en moto es: S/.${total}`)
        break
    case "coche":
        if (kmRecorridos <= 100 && kmRecorridos > 0) {
            total = kmRecorridos * 0.20 + 5
        } else if (kmRecorridos > 100) {
            total = kmRecorridos * 0.20 + 10
        } else if (typeof kmRecorridos !== 'number' || kmRecorridos < 0) {
            console.log("¡Error! Kilómetros inválidos")
        }
        console.log(`El costo total del viaje en coche es: S/.${total}`)
        break
    case "autobus":
        if (kmRecorridos <= 100 && kmRecorridos > 0) {
            total = kmRecorridos * 0.50 + 5
        } else if (kmRecorridos > 100) {
            total = kmRecorridos * 0.50 + 10
        } else if (typeof kmRecorridos !== 'number' || kmRecorridos < 0) {
            console.log("¡Error! Kilómetros inválidos")
        }
        console.log(`El costo total del viaje en autobus es: S/.${total}`)
        break
    default:
        console.log("¡Error! Tipo de vehículo inválido")
        break
}
*/