const factorialNumber = (number) => {
  if (number === 0) return console.error("No puedes ingresar un cero");

  //!Esto es de Jhon y se me pasó muy por alto
  if (Math.sign(number) === -1)
    return console.error("El número no puede ser negativo");

  if (typeof number === "number") {
    let result = 1;

    for (let i = 0; i < number; i++) {
      result += result * i;
    }

    console.log(result);
  } else {
    console.error("Tienes que ingresar solo 1 número");
  }
};

factorialNumber(-12);
