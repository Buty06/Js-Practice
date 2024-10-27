//Programa una Función que valide que un texto sea un nómbre válido

const nameValid = (str) => {
  if (typeof str !== "string" || str.length < 1)
    return console.error(
      `La cadena "${str}" que ingresó, tiene que ingresar un nombre válido`
    );

  // const strArray = str.split(" ");
  // let validation;

  // strArray.forEach((element) => {
  //   if (/[ABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/.test(element[0]) === false)
  //     return console.warn(`El nombre ${str} no es válido`);

  //   validation = /[ABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/.test(element[0]);
  // });

  // if (validation) return console.in(`El nombre ${str} es válido`);

  //!No había entendido bien el ejercicio, por diferentes factores, ahora pondré lo de mircha shonnen

  const regExp = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ\s]+$/g.test(str)
  //? EN las expreciones regulares:
  //* EL ^^ y el $ evaluan que no haya nada delante de la expresíon
  //* El [] es para agruparlos, osea son individuales, no es una palabra específica
  //* El \s es para contar los espacios en blanco
  //* EL + es para contar cada caracter de la expresión
  //* La g es para evaluar esa expresión en todo el string
  //* El método .test() te devuelve si la expresión esxiste dentro de el string o no, en booleano
  //* Y A-Z a-z es para contemplar las letras de la A a la Z
  
  return (regExp)
    ? console.log(`El nombre "${str}" es válido`)
    : console.warn(`El nombre ${str} no es válido`);
};

nameValid(' ala');
