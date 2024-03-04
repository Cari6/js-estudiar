// array1 = ["maria","josefa","roberta"]
// array2 = ["pedro","marcelo",array1,"josefina"]

// forRancio:
// for (let array in array2) {
//     if (array == 2) {
//          for (let array of array1){
//             if (array == "maria") {
//                 continue forRancio;
//             }
//             document.write (array + "<br>") 
         
//         }

//     } else {
//         document.write(array2[array] + "<br>")
//     }
// }

// function saludar(nombre) {
//     let frase= `¡Hola ${nombre}! ¿como estas?`;
//     document.write(frase)
// }

// saludar("pedro")


// let cadena = "cadena de prueba";


// resultado = cadena.split("de");
// document.write(resultado);

let frutas = ["pera","manzana","uva","melon"];
document.write(frutas + "<br>");

resultado = frutas.filter(frutas => frutas.length > 5);

document.write(resultado)