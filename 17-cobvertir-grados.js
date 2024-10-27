//Programa una función para convertir grados de Celsius a Fahrenheit y viceversa

const convertDegrees = (degrees, type) => {
  if (typeof degrees !== "number" && typeof type !== "string")
    return console.error(
      "Tienes que ingresar un grado en forma de número(20deg === 20) y el tipo de medición (C 0 F) respectivamente"
    );

  if (type !== "C" && type !== "F")
    return console.warn(
      'Tienes que ingresar el tipo de medición, "C" para Celsius y "F" para Fahrenheit en mayúsculas'
    );

  let number;
  let typer = type === "C" ? "Celsius" : "Fahrenheit";
  let typer2 = type === "F" ? "Celsius" : "Fahrenheit";

  if (type === "C") {
    number = (degrees * 9) / 5 + 32;
  } else if (type === "F") {
    number = ((degrees - 32) * 5) / 9;
  }

  number = Math.round(number);

  console.log(`${degrees}® ${typer} en ${typer2} es ${number}® ${typer2}`);
};

convertDegrees(33, "C");
