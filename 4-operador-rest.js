//Ejercicio-1: Crea una función que acepte un número indefinido de argumentos y devuelva la suma de todos ellos utilizando el operador rest

export const sumaDeArgumentosInfinitos = (...infinit) => {
  let suma = 0;

  infinit.forEach((element) => {
    suma += element;
  });
  console.log(suma);
};

//Ejercicio-2: Desestructura un araay para obtener el primer elemento y agrupar los elementos restantes utilizando el operador rest
export const agrupacionDeElementos = (arr) => {
  const [primerElemento, ...agrupacion] = arr;
  
  console.log(primerElemento, agrupacion);
};
