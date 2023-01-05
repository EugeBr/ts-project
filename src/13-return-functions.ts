(() => {
    const calcTotal = (prices: number[]): string => {  //* le estoy diciendo que el return debe ser tipo string.
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString(); //* si no transformo en string dará error.
    };

    const printTotal = (prices: number[]): void => { //* al agregar 'void' especificamos que no habra return.
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    };

    printTotal([1,2,1,1,1])

    const rta = calcTotal([1,2,1,1,1]);
    console.log(rta);
})();
