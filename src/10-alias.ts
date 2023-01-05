(() => {
    // Crear un tipo
    type UserID = string | number; //* type es una palabra reservada en typeScript
    let userId: UserID;

    // Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL'; //*limita las opciones permitidas
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    //shirtSize = 'shdfgsjkfg'; //incorrecto

    function greeting(userId: UserID, size: Sizes) {
        if (typeof userId === "string") {
            console.log(`string ${userId.toLowerCase()}`);
        }
    };

    greeting(1111, 'M');
})();
