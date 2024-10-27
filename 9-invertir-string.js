//Programa una función que invierta la palabra de una cadena de texto 
const reverseString = str =>{
    if (typeof str === 'string' && str.length >= 2) {

        let strReverse=''
        const strSplit = str.split('').reverse()
        
        strSplit.forEach((element)=>{
            strReverse += element
        })

        console.log(strReverse);
        
    } else {
        console.error('Tienes que ingresar una cadena de texto con al menos 2 valores')
    }
}

reverseString('todo junto')