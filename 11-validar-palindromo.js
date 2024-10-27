//Programa una función que valide si una palabra o frase dada es un palindromo 

const esPalindromo = word =>{
    if (typeof word === 'string' && word !== '') {
        
        reverseWord = word.split('').reverse().join('')
        isPalindromo = (reverseWord === word)? `La palabra ${word} es palindroma` : `La palabra ${word} no es palindroma`
        
        console.log(isPalindromo);
        
    } else {
        console.error('Tienes que ingresar una palabra');
    }
}

esPalindromo('amar')

let text = 'mama no me wuiewbirif ahfihu mama'
let word = 'mama'
console.log(text.replace(/word/ig, ''));
