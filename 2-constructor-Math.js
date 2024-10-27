//Ejercicio-1: Utiliza el método Math.round() para redondear un número decimal al entero más cercano

export const redondearNumero = (numero) => {
  const numRound = Math.round(numero);
  console.log(numRound);
};

//Ejercicio-2: Genéra un número aleatorio entere el 0 y el 1 utilizando Math.random(). Luego genera un número aleatorio entre 1 y 1000

export const numeroAleatorio = () => {
  const randomNum1 = parseFloat(Math.random().toPrecision(1));
  const randomNum2 = Math.round(Math.random() * 100);

  console.log(randomNum1, randomNum2);
};

//Ejercicio-3: Calcula la raiz de un número dado
export const raizDeDumero = (numero) => {
  console.log(Math.sqrt(numero));
};

//Ejercicio-4: Calcular el calor maximo y el minimo de un conjunto de numeros
export const valoMinMax = (a, b, ...c) => {
    const numMax = Math.max(a, b, ...c)
    const numMin = Math.min(a, b, ...c)
    console.log(numMax, numMin);
};
