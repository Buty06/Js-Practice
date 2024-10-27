//Programa una Función que dada una cadena de texto cuente el número de vocales y de consonantes

const countVocalsOrConsonant = (str) => {
  if (typeof str !== "string" || str.length < 1)
    return console.error(
      "Tienes que ingresar una palabra o cadena de caracteres"
    );

  // const strArray = str.toLocaleLowerCase().split("");
  let vocals = 0;
  let consonant = 0;

  // strArray.forEach((letter) => {
  //   if (
  //     letter === "a" ||
  //     letter === "e" ||
  //     letter === "i" ||
  //     letter === "o" ||
  //     letter === "u"
  //   ) {
  //     vocals += 1;
  //   } else if (letter !== " ") {
  //     consonant += 1;
  //   }
  // });

  //!Mejora de Mircha con arreglitpos míos
  for (const letter of str) {
    
    if (letter !== " ") {
      /[aeiouáéíóú]/i.test(letter) ? (vocals += 1) : (consonant += 1);
    }
    
  }

  console.log(
    `La cadena "${str}" tiene ${vocals} vocales y ${consonant} consonantes`
  );
};

countVocalsOrConsonant("AAAAAAAAAAAAAAAAA");
