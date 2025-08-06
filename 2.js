/**
 * 1. Assinatura
 * summation(n: number): number
 * 
 * 2. O que ele faz
 * summation(n) = Somatorio tendendo a 0
 * 
 * 3. Casos de erro
 * N/A
 * 
 * 4. Casos base
 * Quando n for 0
 * n = 0 => 0
 * 
 * 5. Casos recursivos
 * summation(5) => 5 + 4 + 3 + 2 + 1 + 0
 * summation(-5) => -5 + -4 + -3 + -2 + -1 + -0
 */
const summation = (n) => {
	if (n === 0) {
		return 0;
	}

    const m = n <= 0 ? 1 : -1
	return n + summation(n + m);
};

console.log(summation(2));
console.log(summation(-2));
