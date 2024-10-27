//Programa una función que dado un arreglo de ejementos, elimine los ducplicados

const setArray = (arr) => {
  if (arr instanceof Array === false)
    return console.error(
      "Necesitas ingresar solo un array, puede tener cualquier tipo de valor adentro"
    );
  if (arr.length < 2)
    return console.warn(
      "Necesita tener al menos dos elementos para ver si están repetidos o no"
    );

  return console.log([...new Set(arr)]);
};

setArray([33, 44, 33, 44]);
