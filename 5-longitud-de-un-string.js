//Programa una función que cuente el número de caracteres de una cadena de texto 

const readLengthOfaString = str => {
    try {
        if (typeof str === 'string') {
            return str.length
        } else{
            throw new Error('Necesitas solo poner una cadena de texto( letras ) entre comillas')
        }
    } catch (error) {
        console.error(error);
    }
}

console.log(readLengthOfaString('Hola Mundo de Buty-Dev'));
