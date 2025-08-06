/**
 * 1. Assinatura
 * isPal(str): boolean
 * 
 * 2. O que ele faz
 * isPal(str) => verifica se é palindroma
 * 
 * 3. Casos de erro
 * NA
 * 
 * 4. Casos base
 * str.length = 1 => true
 * str[0] != str[str.length - 1] => false
 * 
 * 5. Casos recursivos
 * isPal("ovo")
 * return isPal("v")
 */

const isPal = (str) => {
    if(str.length === 1) {
        return true;
    }

    const boundsMatch = str[0] === str[str.length - 1];

    if(str.length === 2 || !boundsMatch) {
        return boundsMatch
    }

    return isPal(str.slice(1, str.length -1))
}