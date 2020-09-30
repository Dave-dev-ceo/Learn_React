
const nombre = 'David';
const apellido = 'Gonzalez';
const apellido2 = 'Trujano';

const nombreCompleto = nombre + ' ' + apellido +' ' + apellido2; 

console.log(nombreCompleto);

//USO DE LOS TEMPLATE STRIMG
const nombreTemplateString = `Hola ${nombre} ${apellido} ${apellido2}`;
console.log(nombreTemplateString);

//INCORPORAR EN UN TEMPLATE STRING UN RETURNO DE UNA FUNCION

function getSaludo(){
    return 'Hola';
}
console.log(`${getSaludo()} ${nombreTemplateString} `);



function getSaludo2(nombre){
    return 'hola ' + nombre;
}
console.log(`${getSaludo2(nombre)}`);