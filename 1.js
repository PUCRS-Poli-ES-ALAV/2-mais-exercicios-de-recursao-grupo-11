/**
 * 1. Assinatura
 * fat(n: number): number
 * 
 * 2. O que ele faz
 * fat(n) = n!
 * 
 * 3. Casos de erro
 * n < 0
 * 
 * 4. Casos base
 * Quando n for 0 ou 1
 * n <= 1 => 1
 * 
 * 5. Casos recursivos
 * fat(5) => 5 * 4 * 3 * 2 * 1 * 1
 */
const fat = (n) => {
    if(n < 0) {
        throw new Error("N must be a positive integer")
    }
    
	if (n <= 1) {
		return 1;
	}

	return n * fat(n - 1);
};

console.log(fat(-1));
