//Programa una funcion que dado un arreglo de número devuelva un objeto con dos arreglos, en ascendencia y en descendencia

const orderNumbers = (numArray) => {
  if (numArray instanceof Array === false)
    return console.error("Tienes que ingresar un array de numeros");
  if (numArray.length < 2)
    return console.warn(
      "Tienes que ingresar al menos 2 números para poderlos ordenar"
    );

  const numArray2 = [...numArray];

  const ascendingNumbers = numArray.sort((a, b) => a - b);
  const descendingNumbers = numArray2.sort((a, b) => b - a);

  return {
    ascendingNumbers,
    descendingNumbers,
  }
};

console.log(orderNumbers([1, 4, 5, 6, 12, 31, 0, 87, 3, 45, 2, 3]))
