import { addProduct, calcStock, products } from './product.service'

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
const total = calcStock();
console.log(total);
