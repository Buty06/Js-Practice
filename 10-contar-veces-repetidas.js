//Programa una función para contar el número de veces que se repite una palabra en un texto largo

const numOfRepeatAString = (str, word)=>{
    if (typeof str === 'string' && typeof word === 'string') {
        let countNum = 0;
        
        for (let i = 0; i < str.length; i++) {
            
            if (str.indexOf(word, i) !== -1) {
                countNum++
                i+=str.indexOf(word, i)
            }
            
        }
        console.log(`En la frase "${str}" se repite "${word}" ${countNum} veces`);

    } else{
        console.error('Necesitas ingresar una cadena de texto y la letra o palabra que vas a buscar');
    }
}

numOfRepeatAString('si tu me quieres dame una sonriza, si no me quieres, no me hagas caso', 'quieres')
