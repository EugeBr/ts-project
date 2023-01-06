// Libreria que no soporta TS
import _ from 'lodash';  // VSC da la sugerencia de comando 'npm i --save-dev @types/lodash' para que permita el uso de la libreria


const data = [
    {
        username: 'nico',
        role: 'admin'
    },
    {
        username: 'valentina',
        role: 'seller'
    },
    {
        username: 'zulema',
        role: 'seller'
    },
    {
        username: 'santiago',
        role: 'customer'
    }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
