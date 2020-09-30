// Objetos literales

const persona = {
    nombre : 'David',
    apellido : 'Gonzalez',
    edad : 30,
    direccion : {
        ciudad : 'Chalco',
        codigoPostal : 5600,
        numero : 5,
    },
}

console.log(persona);
//console.table(persona);

//Para mutar un objeto 

const persona2 = {...persona}

persona2.nombre = 'Benito';

console.log(persona);
console.log(persona2);

