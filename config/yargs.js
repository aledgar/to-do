const argv = require('yargs')
            .command('Listar','Listar tareas', {
                descripcion:{
                    alias:'d',
                    demand:true
                }
            })
            .command('Crear','Crear nueva tarea',{
                descripcion:{
                    alias:'d',
                    demand:true
                }
            })
            .command('Actualizar','Actualizar tarea',{
                descripcion:{
                    alias:'d',
                    demand:true
                },
                completado:{
                    alias:'c',
                    default:true
                }
            })
            .help()
            .argv;

module.exports={
    argv
}