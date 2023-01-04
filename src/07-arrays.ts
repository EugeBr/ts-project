(() => {
    let prices = [1, 2, 2, 1, 1, 212]; //solo permite numeros
    // prices.push('asas'); //incorrecto
    // prices.push(true); //incorrecto
    // prices.push({}); //incorrecto
    prices.push(1211122);

    let products = ['hola', true]; //permite strings y booleans
    //products.push(12); //incorrecto

    let mixed: (number | string | boolean | object)[] = ['hola', true];
    mixed.push('hello');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);

    let numbers = [1,2,2,1,1,121];
    numbers.map(item => item * 2);
})();
