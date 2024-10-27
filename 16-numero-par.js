//Programa una función que determine si un número es par o impar

const itIsEven = (number) => {
  if (typeof number !== "number" && number === 0)
    return console.error("Tienes que ingresar un número y que no sea cero");

  const even =
    number % 2 === 0
      ? `El número ${number} es par`
      : `El número ${number} es impar`;

  console.log(even);
};


itIsEven(13)