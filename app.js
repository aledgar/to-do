const argv = require('./config/yargs').argv;
const db = require('./generarDB/db');
const colors = require('colors'); 
// console.log(argv);
var comando = argv._[0];
var desc = argv.d;
switch(comando){
    case 'Crear':
        console.log('Crear tarea');
        console.log(db.createHw(desc));
        break;
    case 'Listar':
        //console.log('Listar tarea');
        let tareas = db.getListado();
        if(tareas.length>0){
            console.log('======= Por hacer ======'.blue);
            for(let tarea of tareas){
                console.log("La tarea es: ",tarea.desc);
                console.log("Completada: ",tarea.completado);
            }
            console.log('========================'.blue);
        }else{
            console.log("No hay tareas".red);
        }
        break;
    case 'Actualizar':
        // console.log("Se ha actualizado la tarea");
        let complete = argv.c;
        //console.log(complete);
        if(db.actualizarHw(desc,complete)){
            console.log("Se edito la tarea".green);
        }else{
            console.log("No se edito la tarea".red);
        }
        break;
    case 'Borrar':
        if(db.borrarHw(desc)){
            console.log("Se borro la tarea con exito! ".green);
        }else{
            console.log("No se borro la tarea, Perdón.".red);
        }
        break;
    default:
        console.log('El comando no se reconoce');
        break;
}