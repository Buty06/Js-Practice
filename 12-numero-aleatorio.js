//Programa una función que obtenga un número aleatorio entre 501 y 600

// const randomNum = () => {
//   const random = parseInt(Math.random() * 100);
//   let array = []

//   for (let i = 501; i <= 600; i++) {
//     array.push(i);
//   }

//   console.log(array[random]);
  
// };

// console.log(randomNum());

//?Solución mejorada de mircha 😭😢
const randomNum = ()=> Math.round(Math.random()*100+500)

console.log(randomNum());
