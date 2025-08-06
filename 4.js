/**
 * 1. Assinatura
 * summation(i: number, n: number): number
 * 
 * 2. O que ele faz
 * summation(i, n) => Somatório de i até n
 * 
 * 3. Casos de erro
 * NA
 * 
 * 4. Casos base
 * Quando i for igual a n
 * retorna i
 * 
 * 5. Casos recursivos
 * summation(1, 2)
 * 1 + summation(2, 2)
 * 1 + 2
 * 3
 * 
 * summation(5, 10)
 * 5 + summation(6, 10)
 * 5 + 6 + summation(7, 10)
 * ...
 * 
 * summation(10, 5)
 * 10 + summation(9, 5)
 * 10 + 9 + summation(8, 5)
 * ...
 */
const summation = (i, n) => {
    if(i === n) {
        return i;
    }
    
    const m = i <= n ? 1 : -1
    return i + summation(i + m, n)
};


console.log(summation(10, 9));
console.log(summation(9, 10));