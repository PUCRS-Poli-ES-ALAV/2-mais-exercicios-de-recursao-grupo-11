const fibN = (n) => {
    if(n === 1 || n === 2) {
        return n
    }

    return (2 * fibN(n - 1)) + (3 * fibN(n - 2))
}

console.log(fibN(4));