//Programa una Función que valide que un texto sea un email válido

const emailValidation = (email) => {
  if (typeof email !== "string" || email.length < 1)
    return console.error("No ingresate el email");

  const regExp = /@gmail.com$/g.test(email)

  return(regExp)
    ? console.log(`EL email ${email} es válido`)
    : console.warn(`EL email ${email} no es válido`)
};

emailValidation('121amama@gmail.com')