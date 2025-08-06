/**
 * 1. Assinatura
 * convBase2(n: number): string
 * 
 * 2. O que ele faz
 * Recebe um inteiro zero ou positivo e retorna uma string com o número em binário.
 * 
 * 3. Casos de erro
 * n < 0 => lança erro
 * 
 * 4. Casos base
 * n < 2 => retorna n como string
 * 
 * 5. Casos recursivos
 * convBase2(5)
 * 5 >= 2
 * convBase2(2) + (5 % 2) => convBase2(2) + "1"
 * convBase2(1) + (2 % 2) => "1" + "0"
 * "10" + "1" = "101"
 */

const convBase2 = (n) => {
    if (n < 0) {
        throw new Error("n deve ser zero ou positivo");
    }
    if (n < 2) {
        return n.toString();
    }
    return convBase2(Math.floor(n / 2)) + (n % 2).toString();
};

console.log(convBase2(0));
console.log(convBase2(1));
console.log(convBase2(2));
console.log(convBase2(5));
console.log(convBase2(10));
