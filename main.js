let persona = {
    nombre: 'Cris',
    apellido: 'Miro',
    edad: 28,
    altura: 1.64,
    eresDesarrollador: true,

}

let obtenerPersona = persona;

console.log(persona)

let listaPersonas = [
{
    nombre: 'Cris',
    apellido: 'Miro',
    edad: 28,
    altura: 1.64,
    eresDesarrollador: true,
},
{
    nombre: 'Hannah',
    apellido: 'Smith',
    edad: 27,
    altura: 1.64,
    eresDesarrollador: true,

},
{
    nombre: 'Marta',
    apellido: 'Fernandez',
    edad: 30,
    altura: 1.67,
    eresDesarrollador: false,

}

];


listaPersonas.sort((a, b) => a.edad - b.edad);
console.log(listaPersonas);





