const http=require('http');


let imprimir = () => {
    setTimeout(function () {
        console.log('Cursos :'+'\n');
        console.log ('El curso Sistemas Operativos tiene una duracion de 36 horas y un valor de 250000 pesos , Id del curso = 1' );
        }, 2000);
        
        setTimeout(function () {
            console.log ('El curso Logica programacion tiene una duracion de 48 horas y un valor de 200000 pesos, Id del curso = 2' );
        }, 4000);
        setTimeout(function () {
            console.log ('El curso Ingles tiene una duracion de 56 horas y un valor de 180000 pesos , Id del curso = 3' );
        }, 6000);
}
    let cursos = [{
        nombre: 'Sistemas Operativos',
        id: 1,
        valor: 250000,
        duracion: 36
    },
    {
        nombre: 'Logica Programacion',
        id: 2,
        valor: 200000,
        duracion: 48
    },
    {
        nombre: 'Ingles',
        id: 3,
        valor:180000,
        duracion: 56
    }
]

let fs = require('fs');
let opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
}


let argv = require('yargs')
    .command('inscribir', 'Comandos de inscripcion', opciones)
    .argv;


function inscribir() {

    if (argv.id == 1 || argv.id == 2 || argv.id == 3) {
        let out = 'Registro exitoso ' + '\n' +
            `Estudiante : ${argv.nombre}` + '\n' +
            `Cedula de ciudadania : ${argv.cedula}` + '\n' +
            `Nombre del curso : ${cursos[argv.id - 1].nombre} ` + '\n' +
            `Duracion de curso :  ${cursos[argv.id - 1].duracion} ` + '\n' +
            `Valor de curso :  ${cursos[argv.id - 1].valor}`;
            http.createServer(function(req,resp){
                resp.write(out);
                resp.end();
       
       
                   }).listen(8080);
                   console.log('Se registro correctamente el usuario y se mostrara en el navegador')


        
    } else {
        console.log('Comando para inscripcion no correcto');
    }
}

inscribir();
imprimir();
