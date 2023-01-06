(() => {
    const login = (data: { email: string, password: number }) => {
        console.log(data.email, data.password);
    };

    // login('nico@nico.com', '12111221');
    login({
        email: 'nico@nico.com',
        password: 12111121
    });

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    // const products: any[] = []; //* recibe cualquier tipo de dato.
    const products: Product[] = []; //* recibe solo datos que cumplan con la estructura de Product.

    const addProduct = (data: Product) => {
        products.push(data);
    };

    addProduct({
        title: 'Prod1',
        createdAt: new Date(1993, 1, 1),
        stock: 12
    });

    addProduct({
        title: 'Prod2',
        createdAt: new Date(2008, 11, 6),
        stock: 15,
        size: 'S'
    });

    console.log(products);
})();
