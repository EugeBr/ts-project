(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    //funcion clasica
    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size
        }
    };

    const product1 = createProductToJson('P1', new Date(), 12, 'XL'); //* da error si no se envian TODOS los parametros
    console.log(product1);
    console.log(product1.title);
    console.log(product1.stock);

    //arrow function //! se usa mas esta version
    const createProductToJsonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes  //* al agregarle '?' se convierte en un parametro opcional
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    };

    const product2 = createProductToJsonV2('P2', new Date(), 14);
    console.log(product2);
    console.log(product2.title);
    console.log(product2.stock);
    console.log(product2.size);
})();
