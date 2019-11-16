const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion requerida'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}