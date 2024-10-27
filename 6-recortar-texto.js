//Programa una función que te devuelva el texto recortado según el número de carácteres indicados 

const recortAText = (srt, size) => {
    try {
        if (typeof srt === 'string' && srt !== "" && typeof size === 'number') {
            return srt.slice(0, size)
        } else {
            throw new TypeError('Tienes que ingresar una cadena y un número en ese orden')
        }
    } catch (error) {
        console.log(error);
    }
}

console.log(recortAText('Hola Mundo', 4))