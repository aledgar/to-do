const argv = require('yargs')
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
            .command('Borrar','Borrar tarea',{
                descripcion:{
                    alias:'d',
                    demand:true
                }
            })
            .help()
            .argv;

module.exports={
    argv
}