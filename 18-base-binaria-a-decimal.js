const changeTheBaseOfTheNumber = (number, type) => {
  if (typeof number !== "number" && typeof type !== number)
    return console.error(
      "Tienes que ingresar un número binario o decimal y ingresar la base a la que pertenece el número(2===binario, 10===decimal) respectivamente."
    );

  if (type !== 10 && type !== 2)
    return console.warn("El tipo de la base tiene que ser 2 o 10");

  if (type === 2) {
    const decimal = parseInt(number, 2);
    console.log(`El número ${number} en Decimal es ${decimal}`);
  } else {
    const binary = number.toString(2);
    console.log(`El número ${number} en Binario es ${binary}`);
  }
};

changeTheBaseOfTheNumber(348, 10)