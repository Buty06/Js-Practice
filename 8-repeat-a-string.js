//Programa una función que repita un texto x veces

// const repeatAText = (str, numRepeat)=>{
//     try {
//         if (typeof str === 'string' && typeof numRepeat === 'number') {
//             return str.repeat(numRepeat)
//         } else {
//             throw new TypeError('Tienes que ingresar una cadena y un número separado por coma')
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// console.time()
// console.log(repeatAText('Hola Mundo ', 800000));
// console.timeEnd()

// const repeatAText = (str, numRepeat) => {
//   if (typeof str === "string" && typeof numRepeat === "number") {
//     console.log(str.repeat(numRepeat));
//   } else {
//     console.error("Tienes que ingresar una cadena y un número separado por coma");
//   }
// };

// repeatAText(0, 80);

const repeatAText = (str, numRepeat)=>{
  try {
    console.log(str.repeat(numRepeat));
  } catch (error) {
    console.error("Tienes que ingresar una cadena y un número separado por coma");
    console.error(error);
  }
}

repeatAText()