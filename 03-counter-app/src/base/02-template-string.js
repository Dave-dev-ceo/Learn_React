


const nombre   = 'David';
const apellido = 'Gonzalez';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre) {
    if(nombre)
    return 'Hola ' + nombre + '!';
    else{
        nombre = 'Carlos';
        return 'Hola ' + nombre + '!'; 
    }
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );