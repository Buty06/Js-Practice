//Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de de hoy

const numberOfYearsPassed = (year) => {
  if (typeof year !== "number")
    return console.error("Tienes que ingresar el año en números solamente");

  const actualDate = new Date().getFullYear();

  console.log(
    `Del año ${year} al año actual(${actualDate}) han pasado ${actualDate - year} años`
  );
};

numberOfYearsPassed(2000);
