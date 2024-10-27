//Programa una función que determine si un número es primo (aquel que solo es divisible por si mismo y 1)

const isCousin = (number) => {
  if (typeof number !== "number")
    return console.error("Tienes que ingresar solo un número");

  const cousin = number / 1 === number && number / number === 1
    ? `El número ${number} es primo`
    : `El número ${number} no es primo`;

  console.log(cousin);
};

isCousin(13)