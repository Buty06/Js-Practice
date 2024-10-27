const capicuaNumber = (number) => {
  if (typeof number === "number") {
    const revers = number.toLocaleString().split("").reverse().join("");
    const compare = (revers == number)
        ? `El número ${number} es capicua`
        : `El número ${number} no es capicua, al derecho ${number} al revés ${revers}`;

    console.log(compare);
  } else{
    console.error('Tienes que ingresar solo un número');
  }
};

capicuaNumber('');
