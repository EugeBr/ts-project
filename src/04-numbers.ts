(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);

    let customerAge: number = 28; //lo mismo pero de forma explicita //*se pone en MINUSCULA
    //no hace falta hacerlo de esta manera, ts lo hace automaticamente.
    //customerAge = customerAge + '1'; //no es posible concatenar, el valor tiene que ser siempre el mismo tipo.
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);

    let productInStock: number; //se define el tipo aunque aun no tenga valor.
    console.log('productInStock', productInStock); //ts alerta cuando dara resultado undefined.
    if (productInStock > 10){  //ts alerta cuando el valor no esta definido aun.
        console.log('is greater');
    };

    let discount = parseInt('123');
    console.log('discount', discount);
    if (discount < 200){
        console.log('apply');
    }else{
        console.log('not apply');
    };

    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b1010;
    console.log('bin', bin);
})();
