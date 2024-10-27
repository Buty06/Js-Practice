//Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada

const calculateFinalAmount = (number, discount) => {
  if (typeof number !== "number" || typeof discount !== "number")
    return console.error(
      "Tienes que ingresar solo números, dando el monto total y el porciento que se le quita(100, 20 = 80)"
    );

  if (discount > 100 || discount < 1)
    return console.warn("tiene que ser un número del 1 al 100");

  //!Mircha solution
  if (Math.sign(number) === -1) return "El monto no puede ser negativo";

  const remainingAmount = number - (number * discount) / 100;
  console.log(
    `Si al monto ${number}$ le descontamos ${discount}% le quedan ${remainingAmount.toFixed(2)}$`
  );
};

calculateFinalAmount(345, 99);
