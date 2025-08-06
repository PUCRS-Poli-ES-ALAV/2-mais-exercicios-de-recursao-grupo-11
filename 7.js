/**
 * 1. Assinatura
 * sumArray(arr: number[]): number
 * 
 * 2. O que ele faz
 * Recebe um array de inteiros e retorna o somatório de todos os seus elementos.
 * 
 * 3. Casos de erro
 * Se o array for vazio, retorna 0.
 * 
 * 4. Casos base
 * Se o array tiver tamanho 0, retorna 0.
 * Se o array tiver tamanho 1, retorna o único elemento.
 * 
 * 5. Casos recursivos
 * sumArray([1,2,3])
 * 1 + sumArray([2,3])
 * 1 + 2 + sumArray([3])
 * 1 + 2 + 3 + sumArray([])
 * 1 + 2 + 3 + 0 = 6
 */

const sumArray = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + sumArray(arr.slice(1));
};

// Exemplos de uso:
console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([])); // 0
console.log(sumArray([10])); // 10
console.log(sumArray([5, -2, 7])); // 10
