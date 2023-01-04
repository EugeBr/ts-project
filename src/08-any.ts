(() => {
    let myDynamicVar: any; //permite cualquier tipo, es mala practica //!no usar
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';

    //dos formas de transformar en tipado de una variable
    myDynamicVar = 'Hola';
    const rta = (myDynamicVar as string).toLowerCase();
    console.log(rta);

    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed;
    console.log(rta2);
})();
