//Programa una función que dado un arreglo de números obtenga el promedio

const calculateAverage = (arr) => {
  if (arr instanceof Array === false)
    return console.error(
      "Necesitas ingresar solo un array, puede tener cualquier tipo de valor adentro"
    );
  if (arr.length < 2)
    return console.warn(
      "Necesita tener al menos dos elementos para ver si están repetidos o no"
    );

  if (arr.some((element) => typeof element !== "number"))
    return console.warn("Solo se pueden ingresar números");

  let addValue = 0;
  arr.forEach((element) => (addValue += element));

  console.log(addValue / arr.length);
};

calculateAverage([9, 2, 2, 6, 5, 4, 3, 2, 1, 0]);
