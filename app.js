const argv = require('./config/yargs').argv;
const db = require('./generarDB/db');

// console.log(argv);
var comando = argv._[0];
var desc = argv.d;
switch(comando){
    case 'Crear':
        console.log('Crear tarea');
        console.log(db.createHw(desc));
        break;
    case 'Listar':
        console.log('Listar tarea');
        break;
    case 'Actualizar':
        console.log("Se ha actualizado la tarea");
        break;
    default:
        console.log('El comando no se reconoce');
        break;
}