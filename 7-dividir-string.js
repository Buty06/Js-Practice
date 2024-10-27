//Programa una función que dada una String te devuelve un Array de textos separados por el caracter que le pases

const splitString = (str, separator)=>{
    try {
        if (typeof str === 'string' && typeof separator === 'string' && str.includes(separator) && str !== '') {
            return str.split(separator)
        } else {
            throw new TypeError('Solo tines que ingresar la cadena y la letra que la va a dividir (como una a), la letra tiene que estar incluida en la cadena')
        }
    } catch (error) {
        console.error(error)
    }
}

console.log(splitString('a s', ' '));
