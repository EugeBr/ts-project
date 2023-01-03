(() =>  {
    let productTitle = 'My amazing product';
    // productTitle = null; //da error
    // productTitle = () => {}; //da error
    // productTitle = 123; //da error
    productTitle = 'My amazing product changed'; //correcto
    console.log('productTitle', productTitle);

    const productDescription = "bla bla bla"; //acepta tanto '' como ""
    console.log('productDescription', productDescription);

    let productPrice = 100;
    let isNew: boolean = false;

    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
    `;
    // se usa `` para concatenar y para escribir en duferentes lineas

    console.log(summary);
})();
